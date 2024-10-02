'use client'
import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import faqTwoData from '@/data/FaqTwoData';
import Image from 'next/image';
import JarallaxImage from '../Jarallax/JarallaxImage';
import dynamic from 'next/dynamic';
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});
const FaqTwo = () => {
    const { bg, title, text, listItems, accordionData } = faqTwoData;
    const [activeKey, setActiveKey] = useState('2'); // default active key

    return (
        <section className="faq-two" >
            <Jarallax className="faq-two__bg" speed={0.32} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>
            <Container>
                <Row>
                    <Col lg={6} className="d-flex align-items-center">
                        <div className="faq-two__content">
                            <h2 className="faq-two__content__title">{title}</h2>
                            <p className="faq-two__content__text">{text}</p>
                            <ul className="faq-two__content__list">
                                {listItems.map((item, index) => (
                                    <li key={index}>
                                        <i className="tolak-icons-two-badge-check"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* <Accordion className="faq-two__accordion">
                            {accordionData.map(({ id, header, content, image }) => (
                               
                                    <Accordion.Item key={id} eventKey={id.toString()}>
                                        <h4>
                                            <i className="fa fa-check-circle"></i> {header}
                                            <span className="accrodion-title__icon"></span>
                                        </h4>
                                    </Accordion.Item>
                                    <Accordion.Collapse eventKey={id.toString()}>
                                        <Card.Body>
                                            <div className="inner">
                                                <div className="inner__image">
                                                    <Image src={image} alt="accordion-logo" />
                                                </div>
                                                <p>{content}</p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>

                            ))}
                        </Accordion> */}
                        <div className="faq-two__accordion">
                            <Accordion activeKey={activeKey}
                                onSelect={(key) => setActiveKey(key)}>
                                {accordionData.map(({ header, content, id, image }) => (
                                    <Accordion.Item key={id} eventKey={id.toString()} className={activeKey === id.toString() ? 'active' : ''}>
                                        <Accordion.Header>
                                            <i className="fa fa-check-circle"></i> {header}

                                            <span className='accrodion-title__icon'></span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='inner'>
                                                <div className="inner__image">
                                                    <Image src={image} alt="accordion-logo" />
                                                </div>
                                                <p>{content}</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FaqTwo;
