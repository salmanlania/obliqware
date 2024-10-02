import ctaFiveData from "@/data/CtaFiveData";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, icon, href, title } = ctaFiveData;

const CtaFive = () => {
  return (
    <section className='cta-five'>
      <Container>
        <div
          className='cta-five__bg'
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Row className=' d-flex align-items-center'>
            <Col md={8} className=' wow fadeInUp' data-aos='fade-up' data-aos-delay='00ms'>
              <div className='cta-five__content'>
                <div className='cta-five__content__icon'>
                  <i className={icon}></i>
                </div>
                <h5 className='cta-five__content__title'>
                  {title} <Link href={href}>Contacts.</Link>
                </h5>
              </div>
            </Col>
            <Col md={4} className='wow fadeInUp' data-aos='fade-up' data-aos-delay='200'>
              <Link href={href} className='tolak-btn'>
                <b>Contact Now</b>
                <span></span>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CtaFive;
