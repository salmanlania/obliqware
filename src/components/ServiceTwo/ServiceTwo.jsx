'use client'
import serviceTwoData from '@/data/ServiceTwoData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});


const { title, tagLine, carouselData } = serviceTwoData
const ServiceTwo = ({ titleTwo, page, nav }) => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const settings = {
        items: 1,
        gutter: 30,
        loop: false,
        nav: nav ? true : false,
        controls: false,
        mouseDrag: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }
    return (
        <section className={`service-two ${page ? "service-two--about" : ""}`} id="services">
            <Container>
                <div
                    className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"
                        } text-center`}
                >
                    <h6
                        className={`${titleTwo === "two"
                            ? "sec-title-two__tagline"
                            : "sec-title__tagline"
                            }`}
                    >
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__left icofont-rounded-double-left"
                                : "sec-title__tagline__left"
                                }`}
                        ></span>
                        {tagLine}
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__right icofont-rounded-double-right"
                                : "sec-title__tagline__right"
                                }`}
                        ></span>
                    </h6>
                    <h3 className='sec-title__title'>{title}</h3>
                </div>
                <div className={`${titleTwo === "two" ? "tolak-owl__carousel--basic-nav" : ""}`}>
                    <TinySlider settings={settings} className="service-two__carousel">
                        {

                            carouselData.map(({ id, image, icon, title, text, href }) =>
                                <div key={id} className="item">
                                    <div className="service-two__item wow fadeInUp" data-aos='fade-up' data-aos-delay="100">
                                        <div className="service-two__item__thumb">
                                            <Image src={image} alt="tolak" />
                                        </div>
                                        <div className="service-two__item__normal">
                                            <div className="service-two__item__normal__icon"><span className={icon}></span></div>
                                            <h3 className="service-two__item__normal__title">{title}</h3>
                                        </div>
                                        <div className="service-two__item__hover">
                                            <div className="service-two__item__normal__icon"><span className={icon}></span></div>
                                            <h3 className="service-two__item__hover__title">
                                                <Link href={href}>{title}</Link>
                                            </h3>
                                            <p className="service-two__item__hover__text">{text}</p>
                                            <Link className="service-two__item__hover__btn" href={href}><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </TinySlider>
                </div>

            </Container>
        </section>
    );
};

export default ServiceTwo;