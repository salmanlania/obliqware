'use client'
import faqPageData from '@/data/FaqPageData';
import Link from 'next/link';
import React from 'react';
import { Accordion, Container, Col, Row } from 'react-bootstrap';
const { accordionData, href, number, subHref, text, title } = faqPageData

const FaqPage = () => {
    return (
        <section className="faq-page">
            <Container >
                <Row >
                    <Col lg={4} >
                        <div className="faq-page__contact background-base">
                            <h3 className="faq-page__contact__title">{title}</h3>
                            <div className="faq-page__contact__text">
                                <i className="icofont-phone"></i>
                                <p className="faq-page__contact__number">
                                    {text}
                                    <br />
                                    <Link href={`${subHref}:${href}`}>{number}</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} >
                        <div className="faq-page__accordion tolak-accrodion" data-grp-name="tolak-accrodion">
                            <Accordion defaultActiveKey='2'>
                                {accordionData.map(({ header, content, id }) => (
                                    <Accordion.Item key={id} eventKey={id.toString()}>
                                        <Accordion.Header>
                                            <i className='fa fa-check-circle'></i>
                                            {header}

                                            <span className='accrodion-title__icon'></span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='inner'>
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

export default FaqPage;