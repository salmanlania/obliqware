import React from 'react';
import teamOneData from '@/data/TeamOneData';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

const { tagLine, title, title2, carouselData } = teamOneData

const TeamOnePage = ({ titleTwo }) => {
    return (
        <section className="team-one" id="team">
            <Container>
                <div
                    className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"
                        } text-center`}
                >
                    <h6
                        className={`${titleTwo === "two"
                            ? "sec-title-two__tagline"
                            : "sec-title__tagline"
                            }`}
                    >
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__left icofont-rounded-double-left"
                                : "sec-title__tagline__left"
                                }`}
                        ></span>
                        {tagLine}
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__right icofont-rounded-double-right"
                                : "sec-title__tagline__right"
                                }`}
                        ></span>
                    </h6>
                    <h3 className='sec-title__title'>{titleTwo === "two" ? title2 : title}</h3>
                </div>
                <div >
                    <Row className="gutter-y-30">
                        {
                            carouselData.map(({ id, image, socials, title, href, designation }) =>
                                <Col lg={4} md={6} key={id} >
                                    <div className="team-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-aos-delay='000'>
                                        <div className="team-card__image">
                                            <Image src={image} alt={title} style={{ height: "auto" }} />
                                        </div>
                                        <div className="team-card__content">
                                            <div className="team-card__hover">
                                                <div className="team-card__social">
                                                    <i className="fa fa-plus"></i>
                                                    <div className="team-card__social__list">
                                                        {
                                                            socials.map(({ id, icon, title, link }) => <Link key={id} href={link}>

                                                                <FontAwesomeIcon icon={icon} />
                                                                <span className="sr-only">{title}</span>
                                                            </Link>)
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="team-card__title">
                                                <Link href={href}>{title}</Link>
                                            </h3>
                                            <p className="team-card__designation">{designation}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>

                </div>



            </Container>
        </section >

    );
};

export default TeamOnePage;