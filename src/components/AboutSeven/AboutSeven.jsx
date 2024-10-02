'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import aboutSevenData from '@/data/AboutSeven';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const AboutSeven = () => {
    const [counterOn, setCounterOn] = useState(false);
    const {
        title,
        tagline,
        contentText,
        listItems,
        additionalText,
        images,
        experience,

    } = aboutSevenData;

    return (
        <section className="about-seven" id='about'>
            <Container>
                <Row>
                    <Col xl={6} className="wow fadeInLeft" data-aos='fade-right' data-aos-delay="100">
                        <div className="about-seven__content">
                            <div className="sec-title-three text-left">
                                <h6 className="sec-title-three__tagline">
                                    <span className="sec-title-three__tagline__left-border"></span>
                                    {tagline}
                                    <span className="sec-title-three__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-three__title">{title}</h3>
                            </div>
                            <p className="about-seven__content__text">{contentText}</p>
                            <ul className="about-seven__content__list">
                                {listItems.map(({ id, icon, text }) => (
                                    <li key={id}>
                                        <i className={icon}></i>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="about-seven__content__text-two">
                                <span>{additionalText.prefix}</span> {additionalText.content} <Link href={additionalText.link.href}>{additionalText.link.text}</Link>
                            </p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                        >
                            <div className="about-seven__image count-box">
                                <Row>
                                    <Col md={6}>
                                        <div className="about-seven__image__one wow fadeInUp" data-aos="fade-up" data-aos-delay="00ms">
                                            <Image src={images.imageOne} alt="About Image One" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="about-seven__image__two wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                                            <Image src={images.imageTwo} alt="About Image Two" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="about-seven__image__bg-shape" ></div>
                                <div className="about-seven__image__experiance">
                                    <h3 className="about-seven__image__experiance__count">
                                        {counterOn && (
                                            <CountUp className='count-text' end={experience.count} duration={1.5} />
                                        )}+
                                    </h3>
                                    {experience.text}
                                </div>
                            </div>
                        </ScrollTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSeven;
