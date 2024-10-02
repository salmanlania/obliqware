'use client'
import ctaEightData from '@/data/CtaEightData';
import React, { Fragment } from 'react';
import JarallaxImage from '../Jarallax/JarallaxImage';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});

const { bg, shape1, shape2, title, text, href } = ctaEightData

const CtaEight = () => {
    return (
        <section className="cta-eight">
            <Jarallax className="cta-eight__bg" speed={0.3} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>
            {/* <div className="cta-eight__bg jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%" style="background-image: url(assets/images/backgrounds/cta-8-bg.jpg);"></div> */}
            <div className="cta-eight__shape-one" style={{ backgroundImage: `url(${shape1.src})` }}></div>
            <div className="cta-eight__shape-two" style={{ backgroundImage: `url(${shape2.src})` }}></div>
            <Container className="container">
                <Row>
                    <Col md={8} className="wow fadeInLeft" data-aos='fade-right' data-aos-delay="00ms">
                        <div className="cta-eight__content">
                            <h2 className="cta-eight__content__title">
                                {title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}
                            </h2>
                            <div className="cta-eight__box">
                                <div className="cta-eight__box__icon"><span className="tolak-icons-two-sign-in-alt1"></span></div>
                                {text.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className=" d-flex align-items-center justify-content-end wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                        <Link href={href} className="tolak-btn-two tolak-btn-two--home-six">
                            <span className="tolak-btn-two__left-star"></span>
                            <span>Contact Us<i className="tolak-icons-two-arrow-right-short"></i></span>
                            <span className="tolak-btn-two__right-star"></span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaEight;