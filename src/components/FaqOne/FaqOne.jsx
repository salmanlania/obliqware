"use client";
import faqOneData from "@/data/FaqOneData";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Tilt } from "react-tilt";
const {
  accordionData,

  expTitle,
  image,
  rightTitle,
  title,
  text,
  tagLine,
  count,
} = faqOneData;

const FaqOne = () => {
  const [counterOn, setCounterOn] = useState(false);
  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };

  return (
    <section className='faq-one'>
      <Container>
        <Row>
          <Col lg={6} className='d-flex align-items-center'>
            <div className='faq-one__content'>
              <div className='sec-title-two text-left'>
                <h6 className='sec-title-two__tagline'>
                  <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                  {tagLine}
                  <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                </h6>
                <h3 className='sec-title-two__title'>{title}</h3>
              </div>
              <Row>
                <Col md={5}>

                  <Tilt
                    className='faq-one__image tolak-tilt'
                    options={defaultOptions}
                  >
                    <Image src={image} alt='tolak' />
                  </Tilt>
                </Col>
                <Col md={7}>
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <div className='faq-one__right'>
                      <div className='faq-one__experiance count-box'>
                        <h3 className='faq-one__experiance__count'>
                          {counterOn && (
                            <CountUp
                              className='count-text'
                              end={count}
                              duration={1.5}
                            />
                          )}
                          +
                        </h3>
                        <h5 className='faq-one__experiance__title'>
                          {expTitle.split("\n").map((t, i) => (
                            <Fragment key={i}>
                              {t}
                              <br />
                            </Fragment>
                          ))}
                        </h5>
                      </div>
                      <h4 className='faq-one__right__title'>{rightTitle}</h4>
                      <p className='faq-one__right__text'>{text}</p>
                    </div>
                  </ScrollTrigger>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className='faq-one__accordion tolak-accrodion'
              data-grp-name='tolak-accrodion'
            >
              <Accordion defaultActiveKey='2'>
                {accordionData.map(({ header, content, id }) => (
                  <Accordion.Item key={id} eventKey={id.toString()}>
                    <Accordion.Header>
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

export default FaqOne;
