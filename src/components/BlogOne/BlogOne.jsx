'use client'
import blogOneData from '@/data/BlogOneData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

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

const { tagLine, title, titleTwo, carouselData } = blogOneData

const BlogOne = ({ two }) => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="blog-one" id='blog'>
            <Container >
                <div className={`${two ? "sec-title-two" : "sec-title"} text-center`}>
                    <h6 className={`${two ? "sec-title-two__tagline" : "sec-title__tagline"}`}><span className={`${two ? "sec-title-two__tagline__left icofont-rounded-double-left" : "sec-title__tagline__left"}`}></span>{tagLine}<span className={`${two ? "sec-title-two__tagline__right icofont-rounded-double-right" : "sec-title__tagline__right"}`}></span></h6>
                    <h3 className={`${two ? "sec-title-two__title" : "sec-title"}`}>{two ? titleTwo : title}</h3>
                </div>
                <TinySlider settings={settings} className="blog-one__carousel">
                    {carouselData.map(({ id, image, link, href, date, comments, title, text }) =>
                        <div key={id} className="item">
                            <div className="blog-card wow fadeInUp" data-aos="fade-up" data-aos-duration='1500' data-aos-delay='00ms'>
                                <div className="blog-card__image">
                                    <Image src={image} alt={title} />
                                    <Image src={image} alt={title} />
                                    <Link href={href} className="blog-card__image__link"><span className="sr-only">{link}</span></Link>

                                </div>
                                <div className="blog-card__bg"></div>
                                <div className="blog-card__meta">
                                    <div className="blog-card__meta__date" dangerouslySetInnerHTML={{ __html: date }}></div>
                                    <div className="blog-card__meta__year">2023</div>
                                    <div className="blog-card__meta__comments">
                                        <i className="icofont-speech-comments"></i>Comments ({comments})
                                    </div>
                                </div>
                                <div className="blog-card__content">
                                    <h3 className="blog-card__title"><Link href={href}>{title}</Link></h3>
                                    <p className="blog-card__text">{text}</p>
                                    <Link href={href} className="blog-card__link">
                                        Read more
                                        <i className="icofont-rounded-double-right"></i>
                                    </Link>
                                </div>
                                <div className="blog-card__border"></div>
                            </div>
                        </div>)}
                </TinySlider>


            </Container>
        </section >
    );
};

export default BlogOne;