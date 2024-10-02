'use client'
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyChooseFourData from '@/data/WhyChooseFourData';
import Image from 'next/image';
import useTolakStretch from '@/hooks/useTolakSerch';

const WhyChooseFour = () => {
    const { bgImage, tagLine, title, text, items } = whyChooseFourData;
    const elementsRef = useTolakStretch();


    return (
        <section className="why-choose-four">
            <Container>
                <Row>
                    <Col xl={6} className="d-flex align-items-center  wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                        <div className="why-choose-four__content">
                            <div className="sec-title-four text-left">
                                <h6 className="sec-title-four__tagline">
                                    <span className="sec-title-four__tagline__left-border"></span>
                                    {tagLine}
                                    <span className="sec-title-four__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-four__title">{title}</h3>
                            </div>
                            <p className="why-choose-four__content__text">
                                {text}
                            </p>
                            <ul className="why-choose-four__list">
                                {items.map(({ id, icon, title, text }) => (
                                    <li key={id}>
                                        <h3 className="why-choose-four__list__title">
                                            <i className={icon}></i>
                                            {title}
                                        </h3>
                                        <p className="why-choose-four__list__text">
                                            {text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div ref={(el) => (elementsRef.current[0] = el)} className="tolak-stretch-element-inside-column">
                            <div className="why-choose-four__image wow slideInRight" data-aos='fade-up'>
                                <Image src={bgImage} alt="Why Choose Us" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseFour;
