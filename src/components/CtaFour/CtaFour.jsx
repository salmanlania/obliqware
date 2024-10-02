'use client'
import ctaFourData from '@/data/CtaFourData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoModal from '../VideoModal/VideoModal';
const {
    bg,
    shape,
    overlay,
    image,
    videoId,
    tagLine,
    title,
    text,
    infoIcon,
    infoText,
    href
} = ctaFourData

const CtaFour = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="cta-four">
                <Container >
                    <div className="cta-four__bg" style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className="cta-four__shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
                        <div className="cta-four__overlay" style={{ backgroundImage: `url(${overlay.src})` }}></div>
                        <Row >
                            <Col lg={6} className=" wow fadeInUp" data-aos='fade-up' data-aos-delay="00ms">
                                <div className="cta-four__content">
                                    <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)} className="video-popup">
                                        <i className="icon-play-button"></i>
                                    </div>
                                    <div className="sec-title-two text-left">
                                        <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                                        <h3 className="sec-title-two__title">{title}</h3>
                                    </div>
                                    <p className="cta-four__content__text">
                                        {text}
                                    </p>
                                    <div className="cta-four__content__bar"></div>
                                    <div className="cta-four__content__info">
                                        <div className="cta-four__content__info__icon"><i className={infoIcon}></i></div>
                                        <p className="cta-four__content__info__text">{infoText} <Link href={href}>Meet.</Link>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                                <div className="cta-four__image">
                                    <Image src={image} alt="tolak" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section >
            <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
        </>
    );
};

export default CtaFour;