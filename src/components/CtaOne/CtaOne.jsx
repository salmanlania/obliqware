import ctaOneData from '@/data/CtaOneData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const {
    shapeLeft,
    shapeLeftRtl,
    shape,
    shapeRtl,
    image,
    author1,
    author2,
    author3,
    icon,
    title,
    text,
    conText,
    conLinkText,
    href } = ctaOneData

const CtaOne = ({ rtl, page }) => {


    return (
        <section className={`${page ? "cta-one--reverse" : "cta-one"}`}>
            <div className="cta-one__bg">
                {
                    page ? null : <div className="cta-one__bg__shape-left" style={{ backgroundImage: `url(${rtl ? shapeLeftRtl.src : shapeLeft.src})` }}></div>

                }
                <div className="cta-one__bg__shape" style={{ backgroundImage: `url(${rtl ? shapeRtl.src : page ? shapeRtl.src : shape.src})` }}></div>
            </div>
            <Container >
                <Row className={`d-flex align-items-center ${page ? "flex-row-reverse" : ""}`}>
                    <Col lg={7} className={`wow ${page ? "fadeInRight" : "fadeInLeft"} `} data-aos={`${page ? "fade-left" : "fade-right"} `} data-aos-delay="100">
                        <div className="cta-one__image">
                            <Image src={image} alt="tolak" />
                        </div>
                    </Col>
                    <Col lg={5} className=" wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                        <div className="cta-one__content">
                            <div className="cta-one__box">
                                <div className="cta-one__box__icon"><span className={icon}></span></div>
                                <h3 className="cta-one__box__title">{title}</h3>
                                <p className="cta-one__box__text">{text}</p>
                            </div>
                            {/* <div className="cta-one__author">
                                <Image src={author1} alt="tolak" />
                                <Image src={author2} alt="tolak" />
                                <Image src={author3} alt="tolak" />
                                <Link className="cta-one__author__rm" href={href}>More <span className="fas fa-arrow-right"></span></Link>
                            </div> */}
                            <p className="cta-one__content__text">{conText} <Link href={href}>{conLinkText}</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaOne;