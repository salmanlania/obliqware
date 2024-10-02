"use client";
import aboutFourData from "@/data/AboutFourData";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import VideoModal from "../VideoModal/VideoModal";
import { Tilt } from "react-tilt";
const {
  bg,
  image1,
  image2,
  count,
  tagLine,
  shape,
  text,
  title,
  tabItems,
  tabContents,
} = aboutFourData;

const AboutFour = () => {
  const [active, setActive] = useState(1);
  const [counterOn, setCounterOn] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };

  return (
    <section className='about-four'>
      <Container className='tabs-box'>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Row>
            <Col xl={6} className=''>

              <div className='about-four__image'>
                <Image src={image1} alt='tolak' />
                <Image src={image2} alt='tolak' />
                <Tilt
                  className='about-four__image__shape tolak-tilt'
                  options={defaultOptions}
                >
                  <Image src={shape} alt='tolak' />
                </Tilt>
                <Tilt
                  className='about-four__fact count-box tolak-tilt' options={defaultOptions}

                >
                  <div className='about-four__fact__icon'>
                    <i className='icon-check-mark'></i>
                  </div>
                  <h3 className='about-four__fact__count'>

                    {counterOn && (
                      <CountUp
                        className='count-text'
                        end={count}
                        duration={1.5}
                      />
                    )}
                    k+
                  </h3>
                  <p className='about-four__fact__text'>Complete Project</p>
                </Tilt>
              </div>

            </Col>
            <Col xl={6} className=' wow fadeInRight' data-aos='fade-left' data-aos-delay='200'>
              <div className='about-four__content'>
                <div className='sec-title-two text-left'>
                  <h6 className='sec-title-two__tagline'>
                    <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>{" "}
                    {tagLine}
                    <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                  </h6>
                  <h3
                    className='sec-title-two__title'
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h3>
                </div>
                <p className='about-four__content__text'>
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </p>
                <div className='about-four__tabs'>
                  <div className='tabs-content'>
                    {tabContents.map(({ id, shape, lists, count, videoId }) => (
                      <Fragment key={id}>
                        <div
                          className={`tab fadeInUp animated ${active === id ? "active-tab" : ""
                            }`}
                        >
                          <ul className='about-four__content__list'>
                            {lists.map((list, index) => (
                              <li key={index}>
                                <span className='icofont-checked'></span>
                                <p>{list}</p>
                              </li>
                            ))}
                          </ul>
                          <div className='about-four__content__shape'>
                            <Image src={shape} alt='tolak' />
                          </div>
                          <Row>
                            <Col md={5}>
                              <div className='about-four__content__btn'>
                                <div
                                  onClick={() => setOpen(true)}
                                  className='video-popup'
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className='fa fa-play'></i>
                                  <span className='video-popup__btn-ripple'></span>
                                </div>
                                Watcing video
                              </div>
                            </Col>
                            <Col md={7}>
                              <div className='about-four__content__fact count-box'>
                                <div className='about-four__content__fact__icon'>
                                  <i className='icon-briefing'></i>
                                </div>
                                <div className='about-four__content__fact__content'>
                                  <h3 className='about-four__content__fact__count'>
                                    {counterOn && (
                                      <CountUp
                                        className='count-text'
                                        end={count}
                                        duration={1.5}
                                      />
                                    )}
                                    k+
                                  </h3>

                                  <p className='about-four__content__fact__text'>
                                    Completed Project
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <VideoModal
                          isOpen={isOpen}
                          setOpen={setOpen}
                          id={videoId}
                        />
                      </Fragment>
                    ))}
                  </div>
                  <ul className='list-unstyled tab-buttons about-four__tabs__list'>
                    {tabItems.map(({ id, title }) => (
                      <li
                        onClick={() => setActive(id)}
                        key={id}
                        className={`tab-btn ${active === id ? "active-btn" : ""}`}
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </section >
  );
};

export default AboutFour;
