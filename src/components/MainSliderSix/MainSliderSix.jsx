
'use client'
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
import mainSliderSixData from "@/data/MainSliderSixData";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

// Dynamically import Tiny Slider
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const MainSliderSix = () => {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const settings = {
        loop: true,
        mode: "gallery",
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        nav: true,
        controls: false,
        autoplayButtonOutput: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
    };

    return (
        <section className="main-slider-six" id="home">
            <TinySlider settings={settings} className="main-slider-six__carousel">
                {mainSliderSixData.map(
                    ({
                        id,
                        bg,
                        layer,
                        subTitle,
                        title,
                        titleSpan,
                        titleLast,
                        text,
                        btnOne,
                        btnTwo,
                        shapeOne,
                        shapeTwo,
                        shapeThree,
                        titleShape,
                    }) => (
                        <div key={id} className="item">
                            <div className="main-slider-six__item">
                                <div
                                    className="main-slider-six__bg"
                                    style={{ backgroundImage: `url(${bg.src})` }}
                                ></div>
                                <div className="main-slider-six__layer">
                                    <Image src={layer} alt="Layer" />
                                </div>
                                <Container>
                                    <div className="main-slider-six__content">
                                        <h5 className="main-slider-six__sub-title">{subTitle}</h5>
                                        <h2 className="main-slider-six__title">
                                            {title}

                                            <span>
                                                {titleSpan}
                                                <Image src={titleShape} alt="Title Shape" />
                                            </span>
                                            <br />
                                            {titleLast}
                                        </h2>
                                        <p className="main-slider-six__text">{text.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</p>
                                        <div className="main-slider-six__btn">
                                            <Link
                                                href={btnOne.href}
                                                className="tolak-btn-two tolak-btn-two--home-six main-slider-six__btn__one"
                                            >
                                                <span className="tolak-btn-two__left-star"></span>
                                                <span>
                                                    {btnOne.text}
                                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                                </span>
                                                <span className="tolak-btn-two__right-star"></span>
                                            </Link>
                                            <a
                                                href={btnTwo.href}
                                                className="tolak-btn-two tolak-btn-two--home-six main-slider-six__btn__two"
                                            >
                                                <span className="tolak-btn-two__left-star"></span>
                                                <span>
                                                    {btnTwo.text}
                                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                                </span>
                                                <span className="tolak-btn-two__right-star"></span>
                                            </a>
                                        </div>
                                    </div>
                                </Container>
                                <div className="main-slider-six__shape-one">
                                    <Image src={shapeOne} alt="Shape One" />
                                </div>
                                <div className="main-slider-six__shape-two">
                                    <Image src={shapeTwo} alt="Shape Two" />
                                </div>
                                <div className="main-slider-six__shape-three">
                                    <Image src={shapeThree} alt="Shape Three" />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </TinySlider>
        </section>
    );
};

export default MainSliderSix;
