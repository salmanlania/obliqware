"use client";
import mainSliderThreeData from "@/data/MainSliderThreeData";
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useRef, useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});


const MainSliderThree = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };
  const settings = {
    loop: true,
    mode: "gallery",
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,

    controls: false,
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      // Add event listener to handle click events on active slides
      const handleSlideClick = (event) => {
        if (event.target.closest(".main-slider-three__btn__video")) {
          setOpen(true);
        }
      };


      slider.addEventListener("click", handleSlideClick);

      return () => {

        slider.removeEventListener("click", handleSlideClick);
      };
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className='main-slider-three' id="home">
        <div ref={sliderRef}>
          <TinySlider
            settings={settings}
            className='main-slider-three__carousel'
          >
            {mainSliderThreeData.map(
              ({
                id,
                shape1,
                shape2,
                shape3,
                shape4,
                bg,
                videoId,
                thumb,
                title,
                text,
              }) => (
                <Fragment key={id}>
                  <div className='item'>
                    <div className='main-slider-three__item'>
                      <div
                        className='main-slider-three__bg'
                        style={{ backgroundImage: `url(${bg.src})` }}
                      ></div>
                      <div
                        className='main-slider-three__shape-one'
                        style={{ backgroundImage: `url(${shape1.src})` }}
                      ></div>
                      <div
                        className='main-slider-three__shape-two'
                        style={{ backgroundImage: `url(${shape2.src})` }}
                      ></div>
                      <div
                        className='main-slider-three__shape-three'
                        style={{ backgroundImage: `url(${shape3.src})` }}
                      ></div>
                      <div
                        className='main-slider-three__shape-four'
                        style={{ backgroundImage: `url(${shape4.src})` }}
                      ></div>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='main-slider-three__thumb'>
                              <Image src={thumb} alt='tolak' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='main-slider-three__content'>
                              <h2 className='main-slider-three__title'>
                                {title.map((t, i) => (
                                  <span
                                    key={i}
                                    className='main-slider-three__title__anim'
                                  >
                                    {t}
                                  </span>
                                ))}
                              </h2>
                              <p className='main-slider-three__text'>
                                {text.split("\n").map((t, i) => (
                                  <Fragment key={i}>
                                    {t}
                                    <br />
                                  </Fragment>
                                ))}
                              </p>
                              <div className='main-slider-three__btn'>
                                <a href='services' className='tolak-btn'>
                                  <b>Service Work</b>
                                  <span></span>
                                </a>
                                <div
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleClick()}
                                  className='main-slider-three__btn__video'
                                >
                                  <div className='video-popup'>
                                    <i className='icon-play-button'></i>
                                    <span className='video-popup__btn-ripple'></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
                </Fragment>
              )
            )}
          </TinySlider>
        </div>
      </section>
    </>
  );
};

export default MainSliderThree;
