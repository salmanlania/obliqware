'use client'
import contactOneData from '@/data/ContactOneData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const { infoIcon,
    infoTitle,
    image,
    imageRtl,
    bg,
    texts,
    tagLine,
    imageTwo,
    title,
    text } = contactOneData;
const ContactOneService = ({ rtl }) => {

    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
        //   const response = await fetch('http://localhost:3001/send-email', {
          const response = await fetch('https://obliqware-website-contact-us-api.vercel.app/send-email', {
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //         form.current,
    //         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    //         .then((result) => {
    //             console.log(result.text);
    //             toast.success('Email sent successfully!');
    //         }, (error) => {
    //             console.log(error.text);
    //             toast.error('Failed to send email.');
    //         });

    //     e.target.reset();
    // };

    return (
        <section className="contact-one" id="contact-service">
            <Container >
                <Row>
                    <Col lg={8} >
                        <div className="contact-one__info wow fadeInLeft" data-aos='fade-right' data-aos-delay="100">
                            <div className="contact-one__info__icon"><span className={infoIcon}></span></div>
                            <h3 className="contact-one__info__title" dangerouslySetInnerHTML={{ __html: infoTitle }}></h3>
                            <p className="contact-one__info__text">
                                {
                                    texts.map(({ id, title, subHref }) => <Link key={id} href={`${subHref}:${title}`}>
                                        {title}
                                    </Link>)
                                }

                            </p>
                        </div>
                    </Col>
                    {/* <Col lg={4}>
                        <div className="contact-one__image wow fadeInRight" data-aos='fade-left' data-aos-delay="200">
                            <Image src={rtl ? imageRtl : image} alt="Obliqware" />
                        </div>
                    </Col> */}
                </Row>
            </Container>
            <Container className="contact-one__container wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                <div className="contact-one__wrapper" style={{ backgroundImage: `url(${bg.src})` }}>
                    <Row >
                        <Col lg={6} className="col-lg-6">
                            <div className="contact-one__image-two">
                                <Image src={imageTwo} alt="Obliqware" />
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-6" id='contact-service-one'>
                            <div className="contact-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                                    <h3 className="sec-title__title">{title}</h3>
                                </div>
                                <p className="contact-one__content__text">
                                    {
                                        text.split("\n").map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)
                                    }

                                </p>
                                <form onSubmit={handleSubmit} ref={form} className="contact-one__form contact-form-validated form-one">
                                    {/* <div className="form-one__group">
                                        <div className="form-one__control">
                                            <input type="text" name="from_name" placeholder="First Name" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email_id" placeholder="Email address" />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="tolak-btn"><b>Send Request</b><span></span></button>
                                        </div>
                                    </div> */}
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
                                                {/* <b>Send Request</b> */}
                                                <b>{loading ? 'Sending' : 'Send Request'}</b>
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
        </section >
    );
};

export default ContactOneService;