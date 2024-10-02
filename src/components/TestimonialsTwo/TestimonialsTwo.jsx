"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
import { Container } from "react-bootstrap";
import testimonialsTwoData from "@/data/TestimonialsTwoData";
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  items: 1,
  gutter: 30,
  loop: false,
  smartSpeed: 700,
  controls: false,
  mouseDrag: true,
  nav: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
};
const { bg, tagLine, title, carouselData } = testimonialsTwoData;

const TestimonialsTwo = ({ page }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className={`testimonials-two ${page ? "testimonials-two--about" : ""}`} id='testimonial'>
      <Jarallax
        className='testimonials-two__bg'
        speed={0.3}
        imgPosition='center center'
      >
        <JarallaxImage src={bg.src} />
      </Jarallax>
      {/* <div className="testimonials-two__bg jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%" style="background-image: url(assets/images/backgrounds/testimonial-bg-2.jpg);"></div> */}
      <Container>
        <div className='sec-title-two text-center'>
          <h6 className='sec-title-two__tagline'>
            <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
            {tagLine}
            <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
          </h6>
          <h3 className='sec-title-two__title'>{title}</h3>
        </div>
        <div className='tolak-owl__carousel--basic-nav'>
          <TinySlider
            settings={settings}
            className='testimonials-Two__carousel '
          >
            {carouselData.map(
              ({ id, image, content, name, designation, rating, quotoBg }) => (
                <div key={id} className='item'>
                  <div className='testimonials-card-two'>
                    <div className='testimonials-card-two__top'>
                      <div className='testimonials-card-two__rating'>
                        {rating.map((c, i) => (
                          <i key={i} className={c}></i>
                        ))}
                      </div>
                      <div className='testimonials-card-two__quote'>
                        <Image src={quotoBg} alt='quote' />
                      </div>
                      <div className='testimonials-card-two__content'>
                        {content}
                      </div>
                    </div>
                    <div className='testimonials-card-two__author'>
                      <div className='testimonials-card-two__image'>
                        <Image src={image} alt={name} />
                      </div>
                      <h3 className='testimonials-card-two__name'>{name}</h3>
                      <p className='testimonials-card-two__designation'>
                        {designation}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </TinySlider>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
