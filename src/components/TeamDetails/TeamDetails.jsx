'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Adjust the import path as needed
import TeamProgressBar from './TeamProgressBar';
import teamDetailsData from '@/data/TeamDetailsData';
import Image from 'next/image';
import Link from 'next/link';

const { image, about, additionalText, contact, name, progress, socialLinks, subHref } = teamDetailsData
const TeamDetails = () => {
    return (
        <section className="team-details">
            <Container>
                <div className="team-details__inner">
                    <Row>
                        <Col lg={5}>
                            <div className="team-details__image">
                                <Image src={image} alt={name} />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="team-details__content">
                                <h3 className="team-details__title">Team Details:</h3>
                                <ul className="list-unstyled team-details__list">
                                    <li>Name: {name}</li>
                                    <li>About: {about}</li>
                                    <li>Call: <Link href={`${subHref}:${contact}`}>{contact}</Link></li>
                                    <li>
                                        <strong>Follow us:</strong>
                                        <div className="team-details__social">
                                            {socialLinks.map(({ name, href, icon }, index) => (
                                                <Link key={index} href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
                                                    <i className={icon} aria-hidden="true"></i>
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </div>
                <p className="team-details__text">{additionalText}</p>
                <Row>
                    {progress.map(({ title, percent }, index) => (
                        <Col lg={5} md={6} key={index}>

                            <TeamProgressBar title={title} percent={percent} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};



export default TeamDetails;
