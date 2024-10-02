'use client'
import testimonialsOneData from '@/data/TestimonialsOneData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import JarallaxImage from '../Jarallax/JarallaxImage';
import { Container } from 'react-bootstrap';
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const settings = {
    items: 1,
    gutter: 0,
    loop: false,
    smartSpeed: 700,
    controls: false,
    nav: true,
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


const { bg, tagLine, title, carouselData } = testimonialsOneData

const TestimonialsOne = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <section className="testimonials-one" id="testimonial">
            <Jarallax className="testimonials-one__bg" speed={0.3} imgPosition="center center">
                <JarallaxImage src={bg.src} />
            </Jarallax>

            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>

                </div>
                <div className="tolak-owl__carousel--basic-nav">
                    <TinySlider settings={settings} className="testimonials-one__carousel">
                        {
                            carouselData.map(({ id, icon, image, content, name, designation, rating }) =>

                                <div key={id} className="item">
                                    <div className="testimonials-card">
                                        <div className="testimonials-card__bg"></div>
                                        <div className="testimonials-card__bg-hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371 430">
                                                <path d="m81 0h210c44.2 0 80 35.8 80 80v280c0 0-69.4 70-148.1 70-28.2 0-57.5 0-85.3 0-73.8 0-136.6-70-136.6-70v-280c0-44.2 35.8-80 80-80z" />
                                            </svg>
                                        </div>
                                        <div className="testimonials-card__quote"><i className={icon}></i></div>
                                        <div className="testimonials-card__content">{content}

                                        </div>
                                        <h3 className="testimonials-card__name">
                                            {name}
                                        </h3>
                                        <p className="testimonials-card__designation">{designation}</p>
                                        <div className="testimonials-card__rating">
                                            {
                                                rating.map((c, i) => <i key={i} className={c}></i>)
                                            }
                                        </div>
                                        <div className="testimonials-card__image">
                                            <Image src={image} alt={name} />
                                        </div>
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

export default TestimonialsOne;