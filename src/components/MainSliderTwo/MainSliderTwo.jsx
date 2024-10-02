'use client'
import mainSliderTwoData from '@/data/MainSliderTwo';
import useTolakStretch from '@/hooks/useTolakSerch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import { Tilt } from 'react-tilt';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
// const Typewriter = dynamic(() => import("react-simple-typewriter"), {
//     ssr: false,
// });
const { shape, text, lists, carouselData, socials, bg, bgDark } = mainSliderTwoData

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
    autoplayButtonOutput: false,
}

const MainSliderTwo = ({ dark }) => {
    const [mounted, setMounted] = useState(false);


    const containerRef = useTolakStretch();


    useEffect(() => {
        setMounted(true);
    }, []);
    // const tolakStretch = () => {
    //     var windowWidth = window.innerWidth;
    //     var elements = document.querySelectorAll(".row .tolak-stretch-element-inside-column");

    //     elements.forEach(function (element) {
    //         var row = element.closest(".row");
    //         var cols = element.closest('[class^="col-"]');
    //         var colsHeight = cols.offsetHeight;
    //         var rect = element.getBoundingClientRect();
    //         var rowRect = row.getBoundingClientRect();
    //         var colsRect = cols.getBoundingClientRect();
    //         var left = rect.left;
    //         var right = windowWidth - rect.right;
    //         var rowPaddingLeft = parseFloat(window.getComputedStyle(row).paddingLeft) || 0;
    //         var rowPaddingRight = parseFloat(window.getComputedStyle(row).paddingRight) || 0;
    //         var rowLeft = rowRect.left + rowPaddingLeft;
    //         var rowRight = windowWidth - rowRect.right + rowPaddingRight;
    //         var colsLeft = colsRect.left;
    //         var colsRight = windowWidth - colsRect.right;
    //         var styles = {
    //             "margin-left": "0px",
    //             "margin-right": "0px"
    //         };

    //         if (Math.round(rowLeft) === Math.round(colsLeft)) {
    //             var marginLeft = parseFloat(window.getComputedStyle(element).marginLeft) || 0;
    //             styles["margin-left"] = (marginLeft - left) + "px";
    //         }

    //         if (Math.round(rowRight) === Math.round(colsRight)) {
    //             var marginRight = parseFloat(window.getComputedStyle(element).marginRight) || 0;
    //             styles["margin-right"] = (marginRight - right) + "px";
    //         }

    //         Object.assign(element.style, styles);
    //     });
    // }

    const defaultOptions = {
        maxTilt: 7,
        scale: 1,
        speed: 700,
        glare: false,
        maxGlare: 0,
    };



    // useEffect(() => {

    //     const containerRef = useTolakStretch();
    //     console.log(containerRef);
    // }, [mounted]);

    if (!mounted) {
        return null;
    }


    return (
        <section className="main-slider-two" style={{ backgroundImage: `url(${dark ? bgDark.src : bg.src})` }} id="home">
            <Tilt className="main-slider-two__shape tolak-tilt" options={defaultOptions} >
                <Image src={shape} alt="tolak" />
            </Tilt>
            <Container >
                <Row className="row">
                    <Col xl={7}>
                        <div className="main-slider-two__content">
                            <h2 className="main-slider-two__title wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                                Great Business Off
                                <Typewriter
                                    className="typewrite"
                                    words={["Planning", "Growth", "Thinking"]}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                                Team

                            </h2>
                            <p className="main-slider-two__text wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                                {text.split("\n").map((t, i) =>
                                    <Fragment key={i} >
                                        {t}
                                        <br />
                                    </Fragment>
                                )}
                            </p>
                            <Row >
                                <Col md={5} lg={5} className=" wow fadeInLeft" data-aos='fade-right' data-aos-delay="300">
                                    <ul className="main-slider-two__list">
                                        {lists.map(({ id, list }) => (
                                            <li key={id} dangerouslySetInnerHTML={{ __html: `<i className="fas fa-check-circle"></i> ${list}` }}></li>
                                        ))}

                                    </ul>
                                </Col>
                                <Col md={7} lg={7} className="wow fadeInRight" data-aos='fade-left' data-aos-delay="300">
                                    <div className="main-slider-two__social">
                                        <h5 className="main-slider-two__social__title">Follow Social:</h5>
                                        <div className="main-slider-two__social__wrap">
                                            {
                                                socials.map(({ id, icon, link, title }) => <Link key={id} href={link}>
                                                    <FontAwesomeIcon icon={icon} />
                                                    <span className="sr-only">{title}</span>
                                                </Link>)
                                            }

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="main-slider-two__btn wow fadeInUp" data-aos='fade-up' data-aos-delay="400ms">
                                <a href="about.html" className="tolak-btn"><b>Get Solution</b><span></span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} >

                        <div ref={el => containerRef.current[0] = el} className="tolak-stretch-element-inside-column">
                            <TinySlider settings={settings} className="main-slider-two__carousel">
                                {
                                    carouselData.map(({ id, shape, bg }) => <div key={id} className="item">
                                        <div className="main-slider-two__bg-color"></div>
                                        <div className="main-slider-two__bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
                                        <div className="main-slider-two__bg-shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
                                    </div>)
                                }
                            </TinySlider>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MainSliderTwo;