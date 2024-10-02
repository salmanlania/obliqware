import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyChooseFiveData from '@/data/WhyChooseFiveData';
import Image from 'next/image';

const WhyChooseFive = () => {
    const { image, tagline, title, text, boxes, listItems, button } = whyChooseFiveData;

    return (
        <section className="why-choose-five">
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="why-choose-five__image wow slideInLeft" data-aos='fade-right'>
                            <Image src={image} alt="tolak" />
                        </div>
                    </Col>
                    <Col xl={6} className="wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                        <div className="why-choose-five__content">
                            <div className="sec-title-four text-left">
                                <h6 className="sec-title-four__tagline">
                                    <span className="sec-title-four__tagline__left-border"></span>
                                    {tagline}
                                    <span className="sec-title-four__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-four__title">{title}</h3>
                            </div>
                            <p className="why-choose-five__content__text">{text}</p>
                            <Row className="gutter-y-30">
                                {boxes.map(({ id, icon, title }) => (
                                    <Col md={4} key={id}>
                                        <div className="why-choose-five__box">
                                            <div className="why-choose-five__box__icon">
                                                <i className={icon}></i>
                                            </div>
                                            <h3 className="why-choose-five__box__title">{title}</h3>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <ul className="why-choose-five__list">
                                {listItems.map((item, index) => (
                                    <li key={index}>
                                        <i className="tolak-icons-two-arrow-circle-right"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={button.link} className="tolak-btn-two tolak-btn-two--home-seven">
                                <span className="tolak-btn-two__left-star"></span>
                                <span>{button.text}<i className={button.icon}></i></span>
                                <span className="tolak-btn-two__right-star"></span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseFive;
