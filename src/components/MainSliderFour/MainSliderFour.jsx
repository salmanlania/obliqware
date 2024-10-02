"use client";
import mainSliderFourData from "@/data/MainSliderFourData";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useState } from "react";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const settings = {
  loop: true,
  mode: "gallery",
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 1000,
  nav: true,
  controls: false,
  gutter: 0,
  autoplayButtonOutput: false,
};
const MainSliderFour = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <section className='main-slider-four' id="home">
      <TinySlider settings={settings} className='main-slider-four__carousel'>
        {mainSliderFourData.map(
          ({ id, bg, subTitle, text, title, titleTwo }) => (
            <div key={id} className='item'>
              <div className='main-slider-four__item'>
                <div
                  className='main-slider-four__bg'
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <div
                  className='main-slider-four__bg'
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <div
                  className='main-slider-four__bg'
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12 text-center'>
                      <div className='main-slider-four__content'>
                        <h5 className='main-slider-four__sub-title'>
                          {subTitle}
                        </h5>
                        <h3 className='main-slider-four__title-two'>
                          {titleTwo}
                        </h3>
                        <h2 className='main-slider-four__title'>{title}</h2>
                        <div className='main-slider-four__text'>
                          <p className='main-slider-four__text__one'>
                            {text.split("\n").map((t, i) => (
                              <Fragment key={i}>
                                {t} <br />
                              </Fragment>
                            ))}
                          </p>
                        </div>
                        <div className='main-slider-four__btn'>
                          <a
                            href='services'
                            className='tolak-btn tolak-btn--one'
                          >
                            <b>Get a Quote</b>
                            <span></span>
                          </a>
                          <div className='main-slider-four__btn__two'>
                            <a href='contact' className='tolak-btn'>
                              <b>Contact Now</b>
                              <span></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </TinySlider>
    </section>
  );
};

export default MainSliderFour;
