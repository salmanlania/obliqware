'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import blogFourData from '@/data/BlogFourData';
import Image from 'next/image';
import Link from 'next/link';

// Dynamically import Tiny Slider
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const { title, tagLine, blogs } = blogFourData;
const BlogFour = () => {
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
        <section className="blog-four" id="blog">
            <Container>
                <div className="blog-four__wrapper">
                    <div className="sec-title-three text-center">
                        <h6 className="sec-title-three__tagline">
                            <span className="sec-title-three__tagline__left-border"></span>
                            {tagLine}
                            <span className="sec-title-three__tagline__right-border"></span>
                        </h6>
                        <h3 className="sec-title-three__title">{title}</h3>
                    </div>

                    <TinySlider settings={sliderSettings} className="blog-two__carousel">
                        {blogs.map(({ id, image, date, altText, href, meta, title, text }) => (
                            <div key={id} className="item">
                                <div className="blog-card-four">
                                    <div className="blog-card-four__image">
                                        <Image src={image} alt={altText} />
                                        <Image src={image} alt={altText} />
                                        <div className="blog-card-four__date">
                                            <i className="icofont-calendar"></i>{date}
                                        </div>
                                        <Link href={href} className="blog-card-four__image__link">
                                            <span className="sr-only">{altText}</span>
                                        </Link>
                                    </div>
                                    <div className="blog-card-four__content">
                                        <ul className="list-unstyled blog-card-four__meta">
                                            <li><i className="tolak-icons-two-user"></i>By: <Link href={href}>{meta.author}</Link></li>
                                            <li><i className="tolak-icons-two-comments"></i>Comments ({meta.comments})</li>
                                        </ul>
                                        <h3 className="blog-card-four__title">
                                            <Link href={href}>{title}</Link>
                                        </h3>
                                        <p className="blog-card-four__text">{text}</p>
                                        <a className="blog-card-four__rm" href={href}>
                                            <span className="tolak-icons-two-arrow-right-short"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>
            </Container>
        </section>
    );
};

export default BlogFour;
