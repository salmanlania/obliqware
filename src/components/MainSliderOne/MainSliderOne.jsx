"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import mainSliderOneData from "@/data/MainSliderOneData";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
import ScrollTriggerCount from "../ScrollTrigger/ScrollTriggerCount";
import { Tilt } from "react-tilt";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const MainSliderOne = () => {
  const [mounted, setMounted] = useState(false);

  const [counterOn, setCounterOn] = useState(false);


  useEffect(() => {
    setMounted(true);

  }, []);




  if (!mounted) {
    return null;
  }
  const settings = {
    lazyload: true,
    mode: "gallery",
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    animateDelay: 5000,
    slideBy: "page",
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoHeight: true,
    controls: false,

    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,


  };

  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };


  return (
    <section className='main-slider-one' id='home' >


      {
        mounted && <TinySlider settings={settings} className='main-slider-one__carousel'>
          {mainSliderOneData.map(
            ({ id, shape, bg, subTitle, title, text, social }) => (
              <div className='item' key={id}>
                <div className='main-slider-one__item'>
                  <Tilt
                    className='main-slider-one__shape tolak-tilt' options={defaultOptions}
                  >
                    <Image src={shape} alt='Obliqware' />
                  </Tilt>
                  <div
                    className='main-slider-one__bg'
                    style={{ backgroundImage: `url(${bg.src})` }}
                  ></div>
                  <svg
                    className='main-slider-one__bg-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <rect
                      className='circle0 steap'
                      x='5.2%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle1 steap'
                      x='15.6%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle2 steap'
                      x='26%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle3 steap'
                      x='36.4%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle4 steap'
                      x='46.8%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle5 steap'
                      x='57%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle6 steap'
                      x='67.7%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle7 steap'
                      x='78.1%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle8 steap'
                      x='88.5%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                    <rect
                      className='circle9 steap'
                      x='100%'
                      y='0'
                      rx='0'
                      ry='0'
                      width='100%'
                      height='100%'
                    />
                  </svg>

                  <Container>
                    <Row>
                      <Col md={12}>
                        <div className='main-slider-one__content'>
                          <h5 className='main-slider-one__sub-title'>
                            {subTitle}
                          </h5>
                          <h2
                            className='main-slider-one__title'
                            dangerouslySetInnerHTML={{ __html: title }}
                          ></h2>
                          <div className='main-slider-one__text'>
                            <p
                              className='main-slider-one__text__one'
                              dangerouslySetInnerHTML={{ __html: text }}
                            ></p>
                          </div>
                          <div className='main-slider-one__bottom'>
                            <div className='main-slider-one__btn'>
                              <a
                                href='services.html'
                                className='tolak-btn tolak-btn--base'
                              >
                                <b>Contact Now</b>
                                <span></span>
                              </a>
                            </div>
                            <div className='main-slider-one__social'>
                              {social.map(({ id, link, icon, name }) => (
                                <Link key={id} href={link} target="_blank">
                                  <FontAwesomeIcon icon={icon} />
                                  <span className='sr-only'>{name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>

                  <div className='main-slider-one__floating-text'>Obliqware</div>
                </div>
              </div>
            )
          )}
        </TinySlider>
      }


      <div
        className='main-slider-one__project wow fadeInUp' data-aos='fade-up'
        data-aos-delay='200'
      >
        <div className='main-slider-one__project__icon'>
          <span className='icon-check-mark'></span>
        </div>

        <h5 className='main-slider-one__project__number count-box'>


          <ScrollTriggerCount count={"Numerous"} />
        </h5>
        <p className='main-slider-one__project__title'>Complete Projects</p>
      </div>

    </section>
  );
};

export default MainSliderOne;
