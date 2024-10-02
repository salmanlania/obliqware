'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import serviceFourData from '@/data/ServiceFourData';
import Image from 'next/image';

const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });

const ServiceFour = () => {
    const { shape, tagLine, title, carouselData, bottom } = serviceFourData;
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const sliderSettings = {
        items: 1,
        gutter: 30,
        loop: false,
        smartSpeed: 700,
        nav: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
        },
    };

    return (
        <section className="service-four" id="service">
            <Container>
                <div className="sec-title-three text-center">
                    <h6 className="sec-title-three__tagline">
                        <span className="sec-title-three__tagline__left-border"></span>
                        {tagLine}
                        <span className="sec-title-three__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-three__title">{title}</h3>
                </div>

                <TinySlider settings={sliderSettings} className="service-four__carousel">
                    {carouselData.map(({ id, image, icon, title, text, href }) => (

                        <div key={id} className="item">
                            <div className="service-four__item text-center">
                                <div className="service-four__item__content">
                                    <div className="service-four__item__icon">
                                        <span className={icon}></span>
                                    </div>
                                    <h3 className="service-four__item__title">
                                        <a href={href}>{title}</a>
                                    </h3>
                                    <p className="service-four__item__text">
                                        {text}
                                    </p>
                                </div>
                                <div className="service-four__item__image">
                                    <Image src={image} alt="tolak" style={{ height: "auto" }} />
                                    <a className="service-four__item__rm" href={href}><span className="tolak-icons-two-arrow-right-short"></span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>

                <div className="service-four__bottom">
                    <div className="service-four__bottom__left" style={{ backgroundImage: `url(${shape.src})` }}>
                        <h3 className="service-four__bottom__title">{title}</h3>
                        <ul className="service-four__bottom__list">
                            {bottom.list.map((item, index) => (
                                <li key={index}>
                                    <i className={item.icon}></i>
                                    <span>{item.text}</span>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <a href={bottom.btnLink} className="tolak-btn-two tolak-btn-two--home-six">
                        <span className="tolak-btn-two__left-star"></span>
                        <span>{bottom.btnText}<i className="tolak-icons-two-arrow-right-short"></i></span>
                        <span className="tolak-btn-two__right-star"></span>
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default ServiceFour;
