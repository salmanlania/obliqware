'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import Link from 'next/link';
import blogFiveData from '@/data/BlogFiveData';

// Dynamically import Tiny Slider
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const { title, tagLine, blogs } = blogFiveData;
const BlogFive = () => {
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
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
        },
    };

    return (
        <section className="blog-five" id='blog'>
            <Container>

                <div className="sec-title-four text-center">

                    <h6 className="sec-title-four__tagline"><span className="sec-title-four__tagline__left-border"></span>{tagLine}<span className="sec-title-four__tagline__right-border"></span></h6>

                    <h3 className="sec-title-four__title">{title}</h3>
                </div>

                <TinySlider settings={sliderSettings} className="blog-two__carousel">
                    {blogs.map(({ id, image, date, altText, href, meta, title, text }) => (
                        <div key={id} className="item">
                            <div className="blog-card-five wow fadeInUp" data-aos="fade-up" data-aos-duration='1500' data-aos-delay='00ms'>
                                <div className="blog-card-five__image">
                                    <Image src={image} alt={title} />
                                    <Image src={image} alt={title} />

                                    <div className="blog-card-five__date" dangerouslySetInnerHTML={{ __html: date }}>

                                    </div>
                                    <Link href={href} className="blog-card-five__image__link"><span className="sr-only">{title}</span></Link>
                                </div>
                                <div className="blog-card-five__content">
                                    <ul className="list-unstyled blog-card-five__meta">
                                        <li><i className="tolak-icons-two-user"></i>By: <Link href={href}>{meta.author}</Link></li>
                                        <li><i className="tolak-icons-two-comments"></i>Comments ({meta.comments})</li>
                                    </ul>
                                    <h3 className="blog-card-five__title"><Link href={href}>{title}</Link></h3>
                                    <p className="blog-card-five__text">{text}</p>
                                    <a className="blog-card-five__rm" href={href}><span className="tolak-icons-two-arrow-right-short"></span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>

            </Container>
        </section>
    );
};

export default BlogFive;
