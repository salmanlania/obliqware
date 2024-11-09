"use client";
import contactTwoData from "@/data/ContactTwoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
const {
  bg,
  infoBoxs,
  infoText,
  infoTitle,
  socials,
  tagLine,
  text,
  title,
} = contactTwoData;
const inputs = ["name", "email", "message"];

const ContactTwo = ({ contact }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //     form.current,
  //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  //     .then((result) => {
  //       console.log(result.text);
  //       toast.success('Email sent successfully!');
  //     }, (error) => {
  //       console.log(error.text);
  //       toast.error('Failed to send email.');
  //     });

  //   e.target.reset();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('first_name'),
      lname: formData.get('last_name'),
      email: formData.get('email_id'),
      number: formData.get('phone_number'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://contact-us-api.obliqware.pk/send-email', {
      // const response = await fetch('http://localhost:3001/send-email', {
      // const response = await fetch('https://obliqware-website-contact-us-api.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send email.');
    }finally {
      setLoading(false);
    } 

    e.target.reset();
  };

  return (
    <section className={`${contact === 'page' ? 'contact-two--contact-page' : ''} contact-two`} id="contact">
      <Container>
        <div className='contact-two__wrapper'>
          <Row>
            <Col lg={6}>
              <div className='contact-two__info'>
                <div
                  className='contact-two__info__shape'
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <h4 className='contact-two__info__title'>{infoTitle} :</h4>
                <p className='contact-two__info__text'>{infoText}</p>
                <ul className='contact-two__info__box-wrapper'>
                  {infoBoxs.map(({ id, icon, text, title, href, subHref }) => (
                    <li key={id} className='contact-two__info__box'>
                      <div className='contact-two__info__box__icon'>
                        <i className={icon}></i>
                      </div>
                      <h4 className='contact-two__info__box__title'>{title}</h4>
                      <p className='contact-two__info__box__text'>
                        {href && subHref ? (
                          <Link href={`${subHref}:${href} `}>{text}</Link>
                        ) : (
                          text
                        )}
                      </p>
                    </li>
                  ))}

                </ul>
                <div className='contact-two__info__social'>
                  <h5 className='contact-two__info__social__title'>
                    Follow Social:
                  </h5>
                  <div className='contact-two__info__social__wrap'>
                    {socials.map(({ id, link, icon, name, target }) => (
                      <Link key={id} href={link} target={target}>
                        <FontAwesomeIcon icon={icon} />
                        <span className='sr-only'>{name}</span>
                      </Link>
                    ))}

                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='contact-two__content'>
                <div className='sec-title-two text-left'>
                  <h6 className='sec-title-two__tagline'>
                    <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                    {tagLine}
                    <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                  </h6>
                  <h3 className='sec-title-two__title'>{title}</h3>
                </div>
                <p className='contact-two__content__text'>
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t}
                      <br />
                    </Fragment>
                  ))}
                </p>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className='contact-two__form contact-form-validated form-one'
                  action='#'
                >
                  <div className='form-one__group'>
                    <div className='form-one__control'>
                      <input type='text' name='first_name' placeholder='First Name' />
                    </div>
                    <div className='form-one__control'>
                      <input type='text' name='last_name' placeholder='Last Name' />
                    </div>
                    <div className='form-one__control'>
                      <input
                        type='email'
                        name='email_id'
                        placeholder='Email address'
                      />
                    </div>
                    <div className='form-one__control'>
                      <input type='text' name='phone_number' placeholder='Phone Number' />
                    </div>
                    <div className='form-one__control form-one__control--full'>
                      <textarea name='message' placeholder='Message'></textarea>
                    </div>
                    <div className='form-one__control form-one__control--full'>
                      <button type='submit' className='tolak-btn'>
                        {/* <b>Send Request</b> */} <b>{loading ? 'Sending' : 'Send Request'}</b>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactTwo;
