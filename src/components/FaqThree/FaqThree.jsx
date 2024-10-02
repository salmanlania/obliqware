'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import faqTwoData from '@/data/FaqTwoData';
import Image from 'next/image';

import faqThreeData from '@/data/FaqThreeData';

const FaqThree = () => {
    const { bg, title, text, tagLine, faqImage1, faqImage2, faqImage3, accordionData } = faqThreeData;
    const [activeKey, setActiveKey] = useState('2'); // default active key

    return (
        <section className="faq-three">
            <Container >
                <Row >
                    <Col lg={6} className=" wow fadeInLeft" data-aos="fade-right">
                        <div className="sec-title-four text-left">

                            <h6 className="sec-title-four__tagline"><span className="sec-title-four__tagline__left-border"></span>{tagLine}<span className="sec-title-four__tagline__right-border"></span></h6>

                            <h3 className="sec-title-four__title">{title}</h3>
                        </div>
                        <p className="faq-three__text">
                            {text}
                        </p>
                        <div className="faq-three__accordion tolak-accrodion" data-grp-name="tolak-accrodion">
                            <Accordion activeKey={activeKey}
                                onSelect={(key) => setActiveKey(key)}>
                                {accordionData.map(({ title, text, id, image }) => (
                                    <Accordion.Item key={id} eventKey={id.toString()} className={activeKey === id.toString() ? 'active' : ''}>
                                        <Accordion.Header>
                                            <i className="fa fa-check-circle"></i> {title}

                                            <span className='accordion-title__icon'></span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='inner'>
                                                <div className="inner__image">
                                                    <Image src={image} alt="accordion-logo" />
                                                </div>
                                                <p>{text}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                            {/* <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Maecenas facilisis erat id solution business
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <div className="inner__image">
                                            <Image src="assets/images/resources/accordian-image.jpg" alt="tolak">
                                        </div>
                                        <p>
                                            Solution the connection, we create business marketing platforms business Solution
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion active">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Digital data facilisis erat id solution business
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <div className="inner__image">
                                            <Image src="assets/images/resources/accordian-image.jpg" alt="tolak">
                                        </div>
                                        <p>
                                            Solution the connection, we create business marketing platforms business Solution
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        We adapt our delivery to the way your solution
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <div className="inner__image">
                                            <Image src="assets/images/resources/accordian-image.jpg" alt="tolak">
                                        </div>
                                        <p>
                                            Solution the connection, we create business marketing platforms business Solution
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item --> */}
                        </div>
                    </Col>
                    <Col lg={6} >
                        <div className="faq-three__image">

                            <div className="faq-three__image__left wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
                                <Image src={faqImage1} alt="tolak" />
                                <Image src={faqImage2} alt="tolak" />
                            </div>
                            <div className="faq-three__image__right wow fadeInUp" data-aos="fade-up" data-aos-delay="200">
                                <Image src={faqImage3} alt="tolak" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FaqThree;
