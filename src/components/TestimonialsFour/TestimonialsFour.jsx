'use client'
import React, { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import testimonialsFourData from '@/data/TestimonialsFourData'; // Adjust the import path
import Image from 'next/image';

const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const settings = {
    items: 1,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: true,

    controls: false,
    autoplay: false,
    responsive: {
        0: { items: 1 },
        992: { items: 2 }
    }
}

const TestimonialsFour = () => {
    const { bg, quote, tagLine, title, carouselData } = testimonialsFourData;
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="testimonials-four" id='testimonial' >
            <Container>
                <div className="sec-title-three text-center">
                    <h6 className="sec-title-three__tagline">
                        <span className="sec-title-three__tagline__left-border"></span>
                        {tagLine}
                        <span className="sec-title-three__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-three__title"> {title.split("\n").map((t, i) => (
                        <Fragment key={i}>
                            {t} <br />
                        </Fragment>
                    ))}</h3>
                </div>
                <Row>
                    <Col>
                        <div className="tolak-carousel--basic-nav">
                            <TinySlider
                                settings={settings}
                                className="testimonials-four__carousel owl-carousel owl-theme"
                            >
                                {carouselData.map(({ id, image, content, name, designation, rating }) => (
                                    <div className="item" key={id}>
                                        <div className="testimonials-card-four">
                                            <div className="testimonials-card-four__rating">
                                                {
                                                    rating.map((c, i) => <i key={i} className={c}></i>)
                                                }
                                            </div>
                                            <div className="testimonials-card-four__content">{content}</div>
                                            <div className="testimonials-card-four__author">
                                                <div className="testimonials-card-four__image">
                                                    <Image src={image} alt={name} />
                                                </div>
                                                <h3 className="testimonials-card-four__name">{name}</h3>
                                                <p className="testimonials-card-four__designation">{designation}</p>
                                            </div>
                                            <div className="testimonials-card-four__quote">
                                                <Image src={quote} alt="quote" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TestimonialsFour;
