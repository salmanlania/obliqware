'use client'
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutSixData from '@/data/AboutSixData';
import Image from 'next/image';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const AboutSix = () => {

    const [counterOn, setCounterOn] = useState(false);
    const {

        image,
        experience: { count, text: experienceText },
        content: { tagLine, title, text, list, btnText, btnLink },
    } = aboutSixData;

    return (
        <section className="about-six" id="about">
            <Container>
                <Row>
                    <Col lg={6}>
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                        >
                            <div className="about-six__image">
                                <div className="about-six__image__one">
                                    <Image src={image} alt="About Us" />
                                </div>
                                <div className="about-six__image__bg-shape">

                                </div>
                                <div className="about-six__image__experiance">
                                    <h3 className="about-six__image__experiance__count">
                                        {counterOn && (
                                            <CountUp className='count-text' end={count} duration={1.5} />
                                        )}
                                        +
                                    </h3>
                                    {experienceText}
                                </div>
                            </div>
                        </ScrollTrigger>
                    </Col>
                    <Col lg={6}>
                        <div className="about-six__content">
                            <div className="sec-title-three text-left">
                                <h6 className="sec-title-three__tagline">
                                    <span className="sec-title-three__tagline__left-border"></span>
                                    {tagLine}
                                    <span className="sec-title-three__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-three__title">{title}</h3>
                            </div>
                            <p className="about-six__content__text">{text}</p>
                            <ul className="about-six__content__list">
                                {list.map((item, index) => (
                                    <li key={index}>
                                        <h3 className="about-six__content__list__title">
                                            <i className={item.icon}></i>
                                            {item.title}
                                        </h3>
                                        <p className="about-six__content__list__text">
                                            {item.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <a href={btnLink} className="tolak-btn-two tolak-btn-two--home-six">
                                <span className="tolak-btn-two__left-star"></span>
                                <span>
                                    {btnText}
                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                </span>
                                <span className="tolak-btn-two__right-star"></span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSix;
