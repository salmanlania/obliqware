import footerData from '@/data/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { logo, footerBg, shape, posts, widgetInfo, widgetSocial, footerAbout, services, quickLinks, bottomLinks } = footerData

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="main-footer background-black">
            <div className="main-footer__bg background-black"
                style={{ backgroundImage: `url(${footerBg.src})` }}></div>

            <div className="main-footer__shape" style={{ backgroundImage: `url(${shape.src})` }}>
            </div>
            <Container >
                <Row >
                    <Col md={6} lg={4} >
                        <div className="footer-widget footer-widget--about">
                            <Link href="/" className="footer-widget__logo">
                                <Image src={logo} width={184} style={{ height: "auto" }} alt="Tolak NextJS Template" />
                            </Link>
                            <ul className="footer-widget__info">
                                <li><span className={widgetInfo.timeIcon}></span>{
                                    widgetInfo.time.split("\n").map((t, i) => <Fragment key={i}> {t} <br /></Fragment>)

                                }</li>
                                <li><span className={widgetInfo.locationIcon}></span>{widgetInfo.location}</li>
                                <li><span className={widgetInfo.telIcon}></ span><Link href={`${widgetInfo.subHref}:${widgetInfo.tel}`}>{widgetInfo.tel}</Link></li>

                            </ul>
                            <div className="footer-widget__social">
                                {
                                    widgetSocial.map(({ id, href, icon, title }) =>
                                        <Link target='_blank' href={href} key={id}>
                                            <FontAwesomeIcon icon={icon} />
                                            <span className="sr-only">{title}</span>
                                        </Link>)
                                }

                            </div>
                            <div className="footer-widget__image">
                                <Image src={footerAbout} alt="tolak" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="footer-widget footer-widget--posts">
                            <h2 className="footer-widget__title">Recent Posts</h2>
                            <ul className="footer-widget__posts list-unstyled">
                                {
                                    posts.posts.map(({ id, title, meta, image, href }) => <li className="footer-widget__posts__item" key={id}>
                                        <div className="footer-widget__posts__image">
                                            <Image src={image} alt="" />
                                        </div>
                                        <div className="footer-widget__posts__content">
                                            <p className="footer-widget__posts__meta">{meta}</p>

                                            <h4 className="footer-widget__posts__title"><Link href={href}>{title}</Link></h4>
                                        </div>
                                    </li>
                                    )
                                }

                            </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={2} >
                        <div className="footer-widget footer-widget--links">
                            <h2 className="footer-widget__title">Service</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {services.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={2}>
                        <div className="footer-widget footer-widget--links footer-widget--last">
                            <h2 className="footer-widget__title">Quick Link</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {quickLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="main-footer__bottom">
                <Container className="container">
                    <Row >
                        <Col md={6} >
                            <p className="main-footer__copyright">
                                &copy; Copyright <span className="dynamic-year">{year}</span> by Tolak NextJS Template.
                            </p>
                        </Col>
                        <Col md={6} >
                            <ul className="list-unstyled main-footer__bottom__list">
                                {bottomLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}


                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer >
    );
};

export default Footer;