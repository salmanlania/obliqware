
import serviceTwoData from '@/data/ServiceTwoData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { tagLine, title, carouselData } = serviceTwoData

const ServiceTwoPage = () => {
    return (
        <section className="service-two service-two--page">
            <Container>
                <div className='sec-title-two text-center'>
                    <h6 className='sec-title-two__tagline'>
                        <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>{" "}
                        {tagLine}
                        <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                    </h6>
                    <h3
                        className='sec-title-two__title'

                    >{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {
                        carouselData.map(({ id, image, title, icon, href, text }) =>
                            <Col key={id} md={6} lg={4} data-aos='fade-up'
                                data-aos-easing='linear'
                                data-aos-duration='1500'>
                                <div className="service-two__item wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                                    <div className="service-two__item__thumb">
                                        <Image src={image} alt="tolak" />
                                    </div>
                                    <div className="service-two__item__normal">
                                        <div className="service-two__item__normal__icon"><span className={icon}></span></div>
                                        <h3 className="service-two__item__normal__title">{title}</h3>
                                    </div>
                                    <div className="service-two__item__hover">
                                        <div className="service-two__item__normal__icon"><span className={icon}></span></div>
                                        <h3 className="service-two__item__hover__title">
                                            <Link href={href}>{title}</Link>
                                        </h3>
                                        <p className="service-two__item__hover__text">{text}</p>
                                        <Link className="service-two__item__hover__btn" href={href}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>

                            </Col>)
                    }

                </Row>
            </Container>
        </section >
    );
};

export default ServiceTwoPage;