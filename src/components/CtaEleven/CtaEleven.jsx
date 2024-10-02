import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ctaElevenData from '@/data/CtaElevenData';
import Image from 'next/image';

const CtaEleven = () => {
    const { title, contactInfo, image, shapeImage } = ctaElevenData;

    return (
        <section className="cta-eleven">
            <Container>
                <div className="cta-eleven__inner">
                    <Row>
                        <Col lg={7} className="d-flex align-items-center wow fadeInLeft" data-aos='fade-right' data-aos-delay="00ms">
                            <div className="cta-eleven__content">
                                <h2 className="cta-eleven__content__title">{title}</h2>
                                <ul className="cta-eleven__box">
                                    {contactInfo.map(({ id, icon, title, text, href, subHref }) => (
                                        <li key={id}>
                                            <div className="cta-eleven__box__icon">
                                                <span className={icon}></span>
                                            </div>
                                            <h4 className="cta-eleven__box__title">{title}</h4>
                                            <p className="cta-eleven__box__text">
                                                <a href={`${subHref}:${href}`}>{text}</a>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={5} className="wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                            <div className="cta-eleven__image">
                                <div className="cta-eleven__image__shape" style={{ backgroundImage: `url(${shapeImage.src})` }}></div>
                                <Image src={image} alt="tolak" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default CtaEleven;
