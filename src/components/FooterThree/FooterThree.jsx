import footerData from "@/data/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const {
  footerBgThree,
  shapeTwo,
  footerLogo,
  posts,
  widgetText,
  widgetInfo,
  widgetSocial,
  footerAbout,
  services,
  quickLinks,
  bottomLinks,
} = footerData;

const FooterThree = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='main-footer-three background-black'>
      <div
        className='main-footer-three__bg background-black'
        style={{ backgroundImage: `url(${footerBgThree.src})` }}
      ></div>

      <div
        className='main-footer-three__shape'
        style={{ backgroundImage: `url(${shapeTwo.src})` }}
      ></div>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className='footer-widget footer-widget--about-two'>
              <a href='index.html' className='footer-widget__logo'>
                <Image
                  src={footerLogo}
                  width={184}
                  style={{ height: "auto" }}
                  alt='Tolak NextJS Template'
                />
              </a>
              <p className='footer-widget--about-two__text'>{widgetText}</p>
              <div className='footer-widget__social'>
                {widgetSocial.map(({ id, href, icon, title }) => (
                  <Link href={href} key={id}>
                    <FontAwesomeIcon icon={icon} />
                    <span className='sr-only'>{title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className='footer-widget footer-widget--links'>
              <h2 className='footer-widget__title'>Service</h2>
              <ul className='list-unstyled footer-widget__links'>
                {services.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className='footer-widget footer-widget--links main-footer-two--ml30'>
              <h2 className='footer-widget__title'>Quick Link</h2>
              <ul className='list-unstyled footer-widget__links'>
                {quickLinks.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className='footer-widget footer-widget--posts'>
              <h2 className='footer-widget__title'>Recent Posts</h2>
              <ul className='footer-widget__posts list-unstyled'>
                {posts.posts.map(({ id, title, meta, image, href }) => (
                  <li className='footer-widget__posts__item' key={id}>
                    <div className='footer-widget__posts__image'>
                      <Image src={image} alt='' />
                    </div>
                    <div className='footer-widget__posts__content'>
                      <p className='footer-widget__posts__meta'>{meta}</p>

                      <h4 className='footer-widget__posts__title'>
                        <Link href={href}>{title}</Link>
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='main-footer-three__bottom'>
        <Container>
          <Row>
            <Col md={6}>
              <p className='main-footer-three__copyright'>
                &copy; Copyright <span className='dynamic-year'>{year}</span> by Obliqware.
              </p>
            </Col>
            <Col md={6}>
              <ul className='list-unstyled main-footer-three__bottom__list'>
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
    </footer>
  );
};

export default FooterThree;
