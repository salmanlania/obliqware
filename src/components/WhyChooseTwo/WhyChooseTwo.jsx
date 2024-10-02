import whyChooseTwoData from '@/data/WhyChooseTwoData';
import Image from "next/image";
import Link from 'next/link';
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
const { bg, image1, image2, image3, image4, items, title, tagLine, text } = whyChooseTwoData

const WhyChooseTwo = () => {
    return (
        <section className="why-choose-two">
            <Container >
                <Row >
                    <Col lg={5}>
                        <div className="why-choose-two__content">
                            <div className="sec-title-two text-left">
                                <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                                <h3 className="sec-title-two__title">{title.split("\n").map((t, i) => (
                                    <Fragment key={i}>
                                        {t} <br />
                                    </Fragment>
                                ))}</h3>
                            </div>
                            <p className="why-choose-two__content__text">
                                {text.split("\n").map((t, i) => (
                                    <Fragment key={i}>
                                        {t} <br />
                                    </Fragment>
                                ))}
                            </p>

                            {items.map(({ id, icon, title, href }) => (
                                id % 2 === 0 ? (
                                    <div
                                        key={id}
                                        className="why-choose-two__item why-choose-two__item--reverse wow fadeInUp" data-aos='fade-up'
                                        data-aos-delay="100"
                                    >
                                        <div className="why-choose-two__item__icon">
                                            <span className={icon}></span>
                                        </div>
                                        <h4 className="why-choose-two__item__title">{title}</h4>
                                        <a href={href} className="why-choose-two__item__rm">
                                            <span className="icon-right-arrow"></span>
                                        </a>
                                    </div>

                                ) : (
                                    <div
                                        key={id}
                                        className="why-choose-two__item wow fadeInUp" data-aos='fade-up'
                                        data-aos-delay="00ms"
                                    >
                                        <div className="why-choose-two__item__icon">
                                            <span className={icon}></span>
                                        </div>
                                        <h4 className="why-choose-two__item__title">{title}</h4>
                                        <Link href={href} className="why-choose-two__item__rm">
                                            <span className="icon-right-arrow"></span>
                                        </Link>
                                    </div>
                                )
                            ))}


                        </div>
                    </Col>
                    <Col lg={7} >
                        <div className="why-choose-two__image">
                            <Image src={image1} alt="tolak" />
                            <div className="why-choose-two__image__two" data-aos='fade-up'
                                data-aos-easing='linear'
                                data-aos-duration='200' >
                                <Image src={image2} alt="tolak" />
                            </div>
                            <div className="why-choose-two__image__three " data-aos='fade-up'
                                data-aos-easing='linear'
                                data-aos-duration='300' >
                                <Image src={image3} alt="tolak" />
                            </div>
                            <div className="why-choose-two__image__four " data-aos='fade-up'
                                data-aos-easing='linear'
                                data-aos-duration='400' >
                                <Image src={image4} alt="tolak" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseTwo;