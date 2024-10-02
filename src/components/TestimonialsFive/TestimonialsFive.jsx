'use client'
import dynamic from "next/dynamic";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import testimonialsFiveData from "@/data/TestimonialsFiveData";
import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";

// Dynamically import TinySlider
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const { bg, shape, title, tagLine, text, carouselData } = testimonialsFiveData;
const TestimonialsFive = () => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);



    const settings = {
        items: 1,
        gutter: 30,
        slideby: "page",
        loop: false,
        mouseDrag: true,
        smartSpeed: 700,
        nav: true,
        controls: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        },
    };

    if (!mounted) {
        return null;
    }
    return (
        <section
            className="testimonials-five" id="testimonial"

        >
            <Parallax
                strength={600}
                bgImage={bg.src}
                className="testimonials-five__bg"
            >

            </Parallax>
            <div
                className="testimonials-five__shape"
                style={{ backgroundImage: `url(${shape.src})` }}
            ></div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="sec-title-three text-left">
                            <h6 className="sec-title-three__tagline">
                                <span className="sec-title-three__tagline__left-border"></span>
                                {tagLine}
                                <span className="sec-title-three__tagline__right-border"></span>
                            </h6>
                            <h3 className="sec-title-three__title">{title}</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <p className="testimonials-five__text">{text}</p>
                    </Col>
                </Row>
                <div className="tolak-carousel--basic-nav">
                    <TinySlider settings={settings} className="testimonials-five__carousel">
                        {carouselData.map(
                            ({ id, image, quoteImage, rating, content, name, designation }) => (
                                <div className="item" key={id}>
                                    <div
                                        className="testimonials-five__item wow fadeInUp" data-aos='fade-up'
                                        data-aos-delay="00ms"
                                    >
                                        <div className="testimonials-five__item__image">
                                            <Image src={image} alt={name} />
                                            <div className="testimonials-five__item__quote">
                                                <Image src={quoteImage} alt="quote" />
                                            </div>
                                        </div>
                                        <div className="testimonials-five__item__rating">
                                            {[...Array(rating)].map((_, i) => (
                                                <i className="icofont-star" key={i}></i>
                                            ))}
                                        </div>
                                        <div className="testimonials-five__item__content">
                                            {content}
                                        </div>
                                        <h3 className="testimonials-five__item__name">{name}</h3>
                                        <p className="testimonials-five__item__designation">
                                            {designation}
                                        </p>
                                        <div className="testimonials-five__item__triangle"></div>
                                    </div>
                                </div>
                            )
                        )}
                    </TinySlider>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialsFive;
