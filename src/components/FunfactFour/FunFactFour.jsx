"use client";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Image from "next/image";
import funFactFourData from "@/data/FunFactFourData";

const { tagLine, title, text, image, items } = funFactFourData;

const FunFactFour = () => {
  const [counterOn, setCounterOn] = useState(false);


  return (
    <section className='funfact-four' id='funfact'>
      <Container>
        <Row className='gutter-y-30'>
          <Col lg={6}>
            <div className='funfact-four__content'>
              <div className='sec-title-three text-left'>
                <h6 className='sec-title-three__tagline'>
                  <span className='sec-title-three__tagline__left-border'></span>
                  {tagLine}
                  <span className='sec-title-three__tagline__right-border'></span>
                </h6>
                <h3 className='sec-title-three__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h3>
              </div>
              <p className='funfact-four__content__text'>{text}</p>
              <Image src={image} alt='Company Team Image' />
            </div>
          </Col>
          <Col lg={6}>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <Row>
                <Col md={6} className='wow fadeInUp' data-aos="fade-up">
                  {items
                    .slice(0, 2)
                    .map(({ id, bg, icon, text, count, suffix }) => (
                      <div
                        key={id}
                        className='funfact-four__item count-box'
                        style={{
                          backgroundImage: `url(${bg.src})`,
                        }}
                      >
                        <div className='funfact-four__item__icon'>
                          <i className={icon}></i>
                        </div>
                        <h3 className='funfact-four__item__count'>
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={count}
                              duration={1.5}
                              delay={0}
                              suffix={suffix}
                            />
                          )}
                        </h3>
                        <p className='funfact-four__item__text'>{text}</p>
                      </div>
                    ))}
                </Col>
                <Col md={6} className='wow fadeInUp' data-aos="fade-up">
                  {items
                    .slice(2, 4)
                    .map(({ id, bg, icon, text, count, suffix }) => (
                      <div
                        key={id}
                        className={`funfact-four__item count-box ${id === 3 ? "funfact-four__item--mt30" : ""
                          }`}
                        style={{
                          backgroundImage: `url(${bg.src})`,
                        }}
                      >
                        <div className='funfact-four__item__icon'>
                          <i className={icon}></i>
                        </div>
                        <h3 className='funfact-four__item__count'>
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={count}
                              duration={1.5}
                              delay={0}
                              suffix={suffix}
                            />
                          )}
                        </h3>
                        <p className='funfact-four__item__text'>{text}</p>
                      </div>
                    ))}
                </Col>
              </Row>
            </ScrollTrigger>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FunFactFour;
