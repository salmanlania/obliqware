import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ctaSevenData from '@/data/CtaSevenData';
import Link from 'next/link';

const CtaSeven = () => {
    const { bg, shapes, title, contactInfo, button } = ctaSevenData;

    return (
        <section className="cta-seven" style={{ backgroundImage: `url(${bg.src})` }}>

            {shapes.map((shape, index) => (
                <div
                    key={index}
                    className={`cta-seven__shape-${index + 1}`}
                    style={{ backgroundImage: `url(${shape.src})` }}
                ></div>
            ))}
            <Container>
                <Row>
                    <Col md={8} className="wow fadeInLeft" data-aos="fade-right" data-aos-delay="00ms">
                        <div className="cta-seven__content">
                            <h2 className="cta-seven__content__title">{title}</h2>
                            <ul className="cta-seven__box">
                                {contactInfo.map(({ id, icon, title, text, href, subHref }) => (
                                    <li key={id}>
                                        <div className="cta-seven__box__icon">
                                            <span className={icon}></span>
                                        </div>
                                        <h4 className="cta-seven__box__title">{title}</h4>
                                        <p className="cta-seven__box__text">
                                            <a href={`${subHref}:${href}`}>{text}</a>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-end wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                        <Link href={button.href} className="tolak-btn-two">
                            <span className="tolak-btn-two__left-star"></span>
                            <span>{button.text}<i className={button.icon}></i></span>
                            <span className="tolak-btn-two__right-star"></span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaSeven;
