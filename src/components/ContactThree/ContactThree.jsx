'use client'
import React, { useState, Fragment, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactThreeData from '@/data/ContactThreeData';

import { Col, Container, Row } from 'react-bootstrap';
import CustomSelectTwo from '../CustomSelect/CustomSelectTwo';
import toast from 'react-hot-toast';
const { bg, title, tagLine, contactInfo } = contactThreeData
const inputs = ["name", "email", "message"];

const options = ["Select Service", "Website Development", "App Development", "IT Counsultant"].map(
    (it) => ({
        value: it,
        label: it,
    })
);




const ContactThree = () => {
    const form = useRef(null)
    const [mounted, setMounted] = useState(false);
    const [sortBy, setSortBy] = useState("Select Service");

    const handleSelectSortBy = ({ value }) => {
        setSortBy(value);
    };
    useEffect(() => {
        setMounted(true)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send email.');
            });

        e.target.reset();
    };


    if (!mounted) {
        return null
    }


    return (
        <section className="contact-three" id='contact'>
            <Container className="container">
                <div className="contact-three__wrapper" style={{ backgroundImage: `url(${bg.src})` }}>
                    <Row >
                        <Col lg={6} md={4} className=""></Col>
                        <Col lg={6} md={4} className=" wow fadeInUp" data-aos='fade-up'>
                            <div className="contact-three__content">
                                <div className="sec-title-four text-center">

                                    <h6 className="sec-title-four__tagline"><span className="sec-title-four__tagline__left-border"></span>{tagLine}<span className="sec-title-four__tagline__right-border"></span></h6>

                                    <h3 className="sec-title-four__title">{title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</h3>
                                </div>
                                <form ref={form} onSubmit={handleSubmit} className="contact-three__form contact-form-validated form-one" >
                                    <div className="form-one__group">
                                        <div className="form-one__control form-one__control--full">
                                            <input type="text" name="from_name" placeholder="Your Name *" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="text" name="phone" placeholder="Your Phone" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email_id" placeholder="Your Email *" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="text" name="subject" placeholder="Your Subjects *" />
                                        </div>
                                        <div className="form-one__control">
                                            <div className="form-one__control__select">

                                                <CustomSelectTwo
                                                    name="sortBy"
                                                    options={options}
                                                    onChange={handleSelectSortBy}
                                                    instanceId="sortBySelect21"
                                                    defaultValue={options[0]}
                                                />


                                            </div>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="message" placeholder="Your Message *"></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="tolak-btn-two tolak-btn-two--home-six">
                                                <span className="tolak-btn-two__left-star"></span>
                                                <span>Send Request<i className="tolak-icons-two-arrow-right-short"></i></span>
                                                <span className="tolak-btn-two__right-star"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="contact-three__content__info wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                                    <div className="contact-three__content__info__icon"><i className={contactInfo.icon}></i></div>
                                    <h5 className="contact-three__content__info__title">{contactInfo.title}</h5>
                                    <p className="contact-three__content__info__text"><a href={`${contactInfo.subHref}:${contactInfo.href}`}>{contactInfo.text}</a></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default ContactThree;