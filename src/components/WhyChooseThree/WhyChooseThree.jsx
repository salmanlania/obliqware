'use client'
import whyChooseThreeData from '@/data/WhyChooseThreeData';
import useTolakStretch from '@/hooks/useTolakSerch';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';


const WhyChooseThree = () => {
    const { bg, image1, tagLine, title, text, items } = whyChooseThreeData;
    const elementsRef = useTolakStretch();


    return (
        <section className="why-choose-three" >
            <div className="why-choose-three__bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
            <Container>
                <Row>
                    <Col xl={6} >

                        <div ref={(el) => (elementsRef.current[0] = el)} className="tolak-stretch-element-inside-column">
                            <div className="why-choose-three__image" data-aos='slide-right'
                                data-aos-easing='linear'
                                data-aos-duration='1000'>
                                <Image src={image1} alt="tolak" />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className="d-flex align-items-center" data-aos='fade-up'
                        data-aos-easing='linear'
                        data-aos-duration='1000'>
                        <div className="why-choose-three__content">
                            <div className="sec-title-three text-left">
                                <h6 className="sec-title-three__tagline">
                                    <span className="sec-title-three__tagline__left-border"></span>
                                    {tagLine}
                                    <span className="sec-title-three__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-three__title">{title}</h3>
                            </div>
                            <p className="why-choose-three__content__text">{text}</p>
                            <ul className="why-choose-three__content__list">
                                {items.map((item) => (
                                    <li key={item.id} className="d-flex align-items-center">
                                        <span className="why-choose-three__content__list__number"></span>
                                        <span className="why-choose-three__content__list__icon">
                                            <i className={item.icon}></i>
                                        </span>
                                        {item.title}
                                        <a className="why-choose-three__content__list__rm" href={item.href}>
                                            <span className="tolak-icons-two-arrow-right-short"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseThree;
