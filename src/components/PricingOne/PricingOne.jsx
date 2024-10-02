import pricingOneData from '@/data/PricingOneData';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const { tagLine, title, priceCards } = pricingOneData

const PricingOne = () => {
    return (
        <section className="pricing-one" id="pricing">
            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {
                        priceCards.map(({ id, icon, title, price, duration, cardLists, href }) => <Col key={id} md={12} lg={4} className="col-md-12 col-lg-4 wow fadeInUp" data-aos='fade-up' data-aos-delay="00ms">
                            <div className="pricing-one__card text-center">
                                <div className="pricing-one__card__icon">
                                    <i className={icon}></i>
                                </div>
                                <h4 className="pricing-one__card__title">{title}</h4>
                                <h3 className="pricing-one__card__price">${price} <span>/{duration}</span></h3>
                                <ul className="list-unstyled pricing-one__card__list">
                                    {
                                        cardLists.map(({ id, title, icon }) => <li key={id}> <i className={icon}></i>{title}</li>)
                                    }
                                </ul>
                                <Link href={href} className="tolak-btn"><b>Get Started</b><span></span></Link>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default PricingOne;