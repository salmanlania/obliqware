'use client'
import React, { useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

import Image from 'next/image';
import { tabOneData } from '@/data/TabOneData';
import Link from 'next/link';
const { tagLine, title, tabItems, tabContents } = tabOneData
const TabOne = () => {

    const [active, setActive] = useState(2);


    return (
        <section className="tab-one" id='tab'>
            <Container className="tabs-box">
                <div className="sec-title-four text-center">
                    <h6 className="sec-title-four__tagline">
                        <span className="sec-title-four__tagline__left-border"></span>
                        {tagLine}
                        <span className="sec-title-four__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-four__title">{title}</h3>
                </div>
                <ul className="list-unstyled tab-buttons tab-one__tab-title">
                    {
                        tabItems.map(({ id, icon, title, shape }) => <li key={id} onClick={() => setActive(id)} className={`tab-btn ${active === id ? "active-btn" : ""}`}>
                            <div className="tab-one__tab-title__trinagle"></div>
                            <div className="tab-one__tab-title__icon"><i className={icon}></i></div>
                            <h3 className="tab-one__tab-title__text">{title}</h3>
                            <div className="tab-one__tab-title__shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
                        </li>)
                    }
                </ul>
                <div className="tabs-content">
                    {
                        tabContents.map(({ id, image, title, text, listItems, authors }) =>
                            <div key={id} className={`tab fadeInUp animated ${active === id ? " active-tab" : ""}`} >
                                <Row>
                                    <Col lg={6}>
                                        <div className="tab-one__thumb">
                                            <Image src={image} alt={title} />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="tab-one__content">
                                            <h3 className="tab-one__content__title">{title}</h3>
                                            <p className="tab-one__content__text">{text}</p>
                                            <ul className="tab-one__content__list">
                                                {listItems.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="tolak-icons-two-arrow-circle-right"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="cta-three__author">
                                                {authors.map((author, index) => (
                                                    <Image key={index} src={author} alt={`Author ${index + 1}`} />
                                                ))}
                                                <Link className="cta-three__author__rm" href="contact">
                                                    More <span className="fas fa-arrow-right"></span>
                                                </Link>
                                            </div>
                                            <Link href="about" className="tolak-btn-two tolak-btn-two--home-six">
                                                <span className="tolak-btn-two__left-star"></span>
                                                <span>
                                                    Learn More<i className="tolak-icons-two-arrow-right-short"></i>
                                                </span>
                                                <span className="tolak-btn-two__right-star"></span>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>)
                    }
                </div>

            </Container>
        </section >
    );
};

export default TabOne;
