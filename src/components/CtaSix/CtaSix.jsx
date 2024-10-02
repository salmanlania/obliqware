import ctaSixData from "@/data/CtaSixData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const { image, author, href, text } = ctaSixData;

const CtaSix = () => {
  return (
    <section className='cta-six'>
      <Container>
        <Row>
          <Col lg={6} className='wow fadeInRight' data-aos="fade-left" data-aos-delay='00ms'>
            <div className='cta-six__content'>
              <div className='cta-six__author'>
                {author.map((a, i) => (
                  <Image key={i} src={a} alt='tolak' />
                ))}

                <Link className='cta-six__author__rm' href={href}>
                  More <span className='fas fa-arrow-right'></span>
                </Link>
              </div>
              <p className='cta-six__content__text'>
                {text} <Link href={href}>( Let’s Started )</Link>
              </p>
            </div>
          </Col>
          <Col lg={6} className='wow fadeInUp' data-aos="fade-up" data-aos-delay='200'>
            <div className='cta-six__image'>
              <Image src={image} alt='tolak' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaSix;
