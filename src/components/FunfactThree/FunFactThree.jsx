'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import funFactThreeData from '@/data/FunFactThreeData';

const FunFactThree = () => {
    const { bgShape, items, itemShape } = funFactThreeData;
    const [counterOn, setCounterOn] = useState(false);

    return (
        <section className="funfact-three">
            <div
                className="funfact-three__bg"
                style={{ backgroundImage: `url(${bgShape.src})` }}
            ></div>
            <Container>
                <Row className="gutter-y-30">
                    {items.map(({ id, icon, text, count, suffix }, index) => (
                        <Col key={id} xl={3} md={6} className="wow fadeInUp" data-aos="fade-up" data-aos-delay={`${index * 100}ms`}>
                            <div className="funfact-three__item count-box">
                                <div
                                    className="funfact-three__item__bg"
                                    style={{ backgroundImage: `url(${itemShape.src})` }}
                                ></div>
                                <div className="funfact-three__item__icon">
                                    <i className={icon}></i>
                                </div>
                                <h3 className="funfact-three__item__count">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={parseInt(count, 10)}
                                                duration={1.5}
                                                suffix={suffix}
                                            />
                                        )}
                                    </ScrollTrigger>
                                </h3>
                                <p className="funfact-three__item__text">{text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FunFactThree;
