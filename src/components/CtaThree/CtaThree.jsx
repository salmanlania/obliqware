import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ctaThreeData from '@/data/CtaThreeData';
import SidebarNewsletter from '../SidebarNewsletter/SidebarNewsletter';

const { image, title, author, href, text } = ctaThreeData

const CtaThree = () => {
    return (
        <section className="cta-three">
            <Container className="container">
                <div className="cta-three__bg">
                    <Row >
                        <Col lg={5} className="wow fadeInUp" data-aos="fade-up" data-aos-delay="200">
                            <div className="cta-three__image">
                                <Image src={image} alt="tolak" />
                            </div>
                        </Col>
                        <Col lg={7} className="wow fadeInRight" data-aos="fade-left" data-aos-delay="00ms">
                            <div className="cta-three__content">
                                <h4 className="cta-three__content__title">{title}</h4>
                                <div>

                                    <SidebarNewsletter ctaThree="true" />
                                </div>


                                <div className="mc-form__response"></div>
                                <div className="cta-three__author">
                                    {author.map((a, i) => <Image key={i} src={a} alt="tolak" />)}
                                    <a className="cta-three__author__rm" href={href}>More <span className="fas fa-arrow-right"></span></a>
                                </div>
                                <p className="cta-three__content__text">{text} <a href={href}>( Let’s Started )</a></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default CtaThree;