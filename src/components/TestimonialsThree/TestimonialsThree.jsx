"use client";
import testimonialsThreeData from "@/data/TestimonialsThreeData";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import JarallaxImage from "../Jarallax/JarallaxImage";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  items: 1,
  gutter: 0,
  loop: false,
  smartSpeed: 700,
  nav: true,

  controls: false,
  autoplay: false,
};

const { bg, carouselData, contTitle, tagLine, title, image1, image2 } =
  testimonialsThreeData;
const TestimonialsThree = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className='testimonials-three' id='testimonial'>
      <Jarallax
        className='testimonials-three__bg'
        speed={0.3}
        imgPosition='center cnter'
      >
        <JarallaxImage src={bg.src} />
      </Jarallax>
      {/* <div className="testimonials-three__bg jarallax" data-jarallax data-speed="0.3" data-ImagePosition="50% -100%" style="background-image: url(assets/images/backgrounds/testimonial-bg-3.jpg);"></div> */}
      <Container>
        <div className='sec-title-two text-center'>
          <h6 className='sec-title-two__tagline'>
            <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
            {tagLine}
            <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
          </h6>
          <h3 className='sec-title-two__title'>{title}</h3>
        </div>
        <Row>
          <Col lg={6}>
            <div className='testimonials-three__image'>
              <Image src={image1} alt='tolak' />
              <Image
                className='testimonials-three__image__left'
                src={image2}
                alt='tolak'
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className='testimonials-three__content'>
              <h3 className='testimonials-three__content__title'>{contTitle}</h3>
              <div className='tolak-owl__carousel--basic-nav'>
                <TinySlider
                  settings={settings}
                  className='testimonials-three__carousel'
                >
                  {carouselData.map(
                    ({ id, designation, name, contentQuote, image }) => (
                      <div key={id} className='item'>
                        <div className='testimonials-card-three'>
                          <div className='testimonials-card-three__content'>
                            <span className='testimonials-card-three__content__quote'>
                              “
                            </span>
                            {contentQuote}
                          </div>
                          <div className='testimonials-card-three__author'>
                            <div className='testimonials-card-three__image'>
                              <Image src={image} alt={name} />
                            </div>
                            <h3 className='testimonials-card-three__name'>
                              {name}
                            </h3>
                            <p className='testimonials-card-three__designation'>
                              {designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </TinySlider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsThree;
