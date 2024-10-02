'use client'
import pricingOneData from '@/data/PricingOneData';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});


const { tagLine, title, priceCards } = pricingOneData

const PricingOneCarousel = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    const settings = {
        items: 1,
        gutter: 0,
        loop: false,
        smartSpeed: 700,
        nav: true,
        controls: false,
        mouseDrag: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                gutter: 30
            },
            1200: {
                items: 3,
                gutter: 30
            }
        }
    }
    return (
        <section className="pricing-one">
            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <div className="tolak-owl__carousel--basic-nav">
                    <TinySlider settings={settings} className="pricing-one__carousel">
                        {
                            priceCards.map(({ id, icon, title, price, duration, cardLists, href }) =>
                                <div key={id} className="item">
                                    <div className="pricing-one__card text-center">
                                        <div className="pricing-one__card__icon">
                                            <i className={icon}></i>
                                        </div>
                                        <h4 className="pricing-one__card__title">{title}</h4>
                                        <h3 className="pricing-one__card__price">${price} <span>/{duration}</span></h3>
                                        <ul className="list-unstyled pricing-one__card__list">
                                            {
                                                cardLists.map(({ id, title, icon }) => <li key={id}> <i className={icon}></i>{title}</li>)
                                            }
                                        </ul>
                                        <Link href={href} className="tolak-btn"><b>Get Started</b><span></span></Link>
                                    </div>
                                </div>

                            )
                        }
                        {
                            priceCards.map(({ id, icon, title, price, duration, cardLists, href }) =>
                                <div key={id} className="item">
                                    <div className="pricing-one__card text-center">
                                        <div className="pricing-one__card__icon">
                                            <i className={icon}></i>
                                        </div>
                                        <h4 className="pricing-one__card__title">{title}</h4>
                                        <h3 className="pricing-one__card__price">${price} <span>/{duration}</span></h3>
                                        <ul className="list-unstyled pricing-one__card__list">
                                            {
                                                cardLists.map(({ id, title, icon }) => <li key={id}> <i className={icon}></i>{title}</li>)
                                            }
                                        </ul>
                                        <Link href={href} className="tolak-btn"><b>Get Started</b><span></span></Link>
                                    </div>
                                </div>

                            )
                        }
                    </TinySlider>
                </div>
            </Container>
        </section>
    );
};

export default PricingOneCarousel;