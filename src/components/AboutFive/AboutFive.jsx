'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import aboutFiveData from '@/data/AboutFiveData';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const AboutFive = () => {
    const [counterOn, setCounterOn] = useState(false);
    const {
        bgShape,
        images: { image1, image2 },
        shapes: { shapeOne, shapeTwo },
        experience,
        content,
        infoText,
        infoLink
    } = aboutFiveData;

    return (
        <section className="about-five" id="about">
            <div
                className="about-five__shape"
                style={{ backgroundImage: `url(${bgShape.src})` }}
            ></div>
            <Container>
                <Row>
                    <Col xl={6}>
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                        >
                            <div className="about-five__image count-box wow fadeInUp" data-aos='fade-up' data-aos-delay="00ms">
                                <div className="about-five__image__one wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                                    <Image src={image1} alt="Image 1" />
                                </div>
                                <div className="about-five__image__two">
                                    <Image src={image2} alt="Image 2" />
                                </div>
                                <div className="about-five__image__shape-one">
                                    <Image src={shapeOne} alt="Shape One" />
                                </div>
                                <div className="about-five__image__shape-two">
                                    <Image src={shapeTwo} alt="Shape Two" />
                                </div>
                                <div className="about-five__image__experiance wow fadeInUp" data-aos='fade-up' data-aos-delay="300">
                                    <h3 className="about-five__image__experiance__count">
                                        {counterOn && (
                                            <CountUp className='count-text' end={experience.count} duration={1.5} />
                                        )}+
                                    </h3>
                                    {experience.text}
                                </div>
                            </div>
                        </ScrollTrigger>
                    </Col>
                    <Col xl={6} className="wow fadeInRight" data-aos='fade-Left' data-aos-delay="200">
                        <div className="about-five__content">
                            <div className="sec-title-three text-left">
                                <h6 className="sec-title-three__tagline">
                                    <span className="sec-title-three__tagline__left-border"></span>
                                    {content.tagLine}
                                    <span className="sec-title-three__tagline__right-border"></span>
                                </h6>
                                <h3
                                    className="sec-title-three__title"

                                >{content.title}</h3>
                            </div>
                            <p className="about-five__content__text">{content.text}</p>
                            <ul className="about-five__content__list">
                                {content.listOne.map((item, index) => (
                                    <li key={index}>
                                        <i className="tolak-icons-two-arrow-circle-right"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="about-five__content__list-two">
                                {content.listTwo.map((item, index) => (
                                    <li key={index}>
                                        <i className="tolak-icons-two-gear"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href={content.btnLink} className="tolak-btn-two">
                                <span className="tolak-btn-two__left-star"></span>
                                <span>{content.btnText}<i className="tolak-icons-two-arrow-right-short"></i></span>
                                <span className="tolak-btn-two__right-star"></span>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <div className="about-five__info">
                    <i className="tolak-icons-two-badge-check"></i>
                    {infoText} - <Link href={infoLink.href}>{infoLink.text}</Link>
                </div>
            </Container>
        </section>
    );
};

export default AboutFive;
