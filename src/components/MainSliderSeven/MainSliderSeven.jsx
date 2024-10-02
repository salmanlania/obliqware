'use client'
import React, { Fragment, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import mainSliderSevenData from "@/data/MainSliderSeven";


const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const MainSliderSeven = () => {
    const { slides } = mainSliderSevenData;

    const [mounted, setMounted] = useState(false);


    const settings = {
        lazyload: true,
        loop: true,
        mode: "gallery",
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        slideBy: "page",
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        nav: true,
        autoplayButtonOutput: false,
        controls: false,
        dotData: true,
        gutter: 0,


    }

    useEffect(() => {
        setMounted(true);
    }, []);




    if (!mounted) {
        return null;
    }


    return (
        <section className="main-slider-seven" id='home'>
            <TinySlider settings={settings} className="main-slider-seven__carousel">
                {slides.map(({ id, dotButton, background, layer, content, shapeOne, shapeTwo }) => (
                    <div className="item" key={id} >
                        <div className="main-slider-seven__item">
                            <div className="main-slider-seven__bg">
                                <Image
                                    src={background}
                                    alt="slider background"

                                />
                            </div>
                            <div className="main-slider-seven__layer">
                                <Image
                                    src={layer}
                                    alt="slider layer"

                                />
                            </div>
                            <Container>
                                <Row>
                                    <Col lg={6}></Col>
                                    <Col lg={6}>
                                        <div className="main-slider-seven__content">
                                            <h2 className="main-slider-seven__title-one">{content.titleOne}</h2>
                                            <h2 className="main-slider-seven__title-two">{content.titleTwo}</h2>
                                            <h2 className="main-slider-seven__title-three">{content.titleThree}</h2>
                                            <p className="main-slider-seven__text">{content.text.split("\n").map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</p>
                                            <div className="main-slider-seven__btn">
                                                <a
                                                    href={content.button.href}
                                                    className="tolak-btn-two tolak-btn-two--home-six main-slider-seven__btn__one"
                                                >
                                                    <span className="tolak-btn-two__left-star"></span>
                                                    <span>
                                                        {content.button.text}
                                                        <i className={content.button.icon}></i>
                                                    </span>
                                                    <span className="tolak-btn-two__right-star"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="main-slider-seven__shape-one">
                                <Image
                                    src={shapeOne}
                                    alt="slider shape one"

                                />
                            </div>
                            <div className="main-slider-seven__shape-two">
                                <Image
                                    src={shapeTwo}
                                    alt="slider shape two"

                                />
                            </div>
                        </div>
                    </div>
                ))}
            </TinySlider>


        </section>
    );
};

export default MainSliderSeven;
