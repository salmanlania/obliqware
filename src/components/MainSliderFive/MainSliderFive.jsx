'use client'
import mainSliderFiveData from '@/data/MainSliderFiveData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const settings = {
    loop: true,
    mode: "gallery",
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: true,
    controls: false,
    navData: true,
    margin: 0,
    autoplayButtonOutput: false,
};
const MainSliderFive = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const sliderRef = useRef(null);


    const handleClick = () => {


        setOpen(true);
    };

    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;

            // Add event listener to handle click events on active slides
            const handleSlideClick = (event) => {
                if (event.target.closest(".main-slider-five__btn")) {
                    setOpen(true);
                }
            };

            // Attach the click listener to the slider container
            slider.addEventListener("click", handleSlideClick);

            return () => {
                // Cleanup event listener on unmount
                slider.removeEventListener("click", handleSlideClick);
            };
        }
    }, [mounted]);

    if (!mounted) {
        return null;
    }
    return (
        <section className="main-slider-five" id=''>
            <div ref={sliderRef}>
                <TinySlider settings={settings} className="main-slider-five__carousel ">
                    {mainSliderFiveData.map(({ id, bg, subTitle, title, text, titleTwo, features, btnText, href, videoId, shape, videoText, }) => (
                        <Fragment key={id}>

                            <div className="item" >
                                <div className="main-slider-five__item">
                                    <div className="main-slider-five__bg">
                                        <Image src={bg} alt="tolak" />
                                        <Image src={bg} alt="tolak" />
                                    </div>
                                    <div className="container">
                                        <div className="main-slider-five__content">
                                            <h5 className="main-slider-five__sub-title">
                                                <span className="main-slider-five__sub-title__border"></span>{subTitle}
                                            </h5>
                                            <h2 className="main-slider-five__title">
                                                {title} <br />
                                                {titleTwo}
                                            </h2>
                                            <p className="main-slider-five__text">
                                                {text.split('\n').map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                            <ul className="main-slider-five__list">
                                                {features.map((feature, index) => (
                                                    <li key={index}>
                                                        <i className={feature.icon}></i>{feature.text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div style={{ cursor: "pointer" }}
                                                onClick={() => handleClick()}
                                                className="main-slider-five__btn">
                                                <Link href={href} className="tolak-btn-two">
                                                    <span className="tolak-btn-two__left-star"></span>
                                                    <span>{btnText}<i className="tolak-icons-two-arrow-right-short"></i></span>
                                                    <span className="tolak-btn-two__right-star"></span>
                                                </Link>
                                                <div className="video-popup">
                                                    <i className="tolak-icons-two-play"></i>{videoText}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-slider-five__shape">
                                        <Image src={shape} alt="Shape" />
                                    </div>
                                </div>
                            </div>
                            <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
                        </Fragment>
                    ))}
                </TinySlider>
            </div>



        </section >
    );
};

export default MainSliderFive;