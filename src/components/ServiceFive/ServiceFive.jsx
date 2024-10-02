'use client'
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

import serviceFiveData from '@/data/ServiceFiveData';
import Image from 'next/image';
import Link from 'next/link';

const ServiceFive = () => {
    const [mounted, setMounted] = useState(false);

    const { title, tagline, carouselItems } = serviceFiveData;
    const settings = {
        items: 1,
        gutter: 30,
        loop: false,
        smartSpeed: 700,
        nav: false,
        mouseDrag: true,
        controls: false,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    }



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="service-five" id='service'>
            <Container>
                <div className="sec-title-three text-center">
                    <h6 className="sec-title-three__tagline">
                        <span className="sec-title-three__tagline__left-border"></span>
                        {tagline}
                        <span className="sec-title-three__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-three__title">{title}</h3>
                </div>
                <TinySlider
                    className="service-five__carousel"
                    settings={settings}
                >
                    {carouselItems.map(({ id, image, icon, title, link, description }) => (
                        <div className="item" key={id}>
                            <div className="service-five__item text-center">
                                <div className="service-five__item__image">
                                    <Image src={image} alt={title} />
                                </div>
                                <div className="service-five__item__content">
                                    <div className="service-five__item__icon">
                                        <span className={icon}></span>
                                    </div>
                                    <h3 className="service-five__item__title">
                                        <Link href={link}>{title}</Link>
                                    </h3>
                                    <p className="service-five__item__text">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>
            </Container>
        </section>
    );
};

export default ServiceFive;
