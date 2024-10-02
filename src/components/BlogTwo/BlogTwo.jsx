'use client'
import blogTwoData from '@/data/BlogTwoData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const { tagLine, title, carouselData } = blogTwoData
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
        992: {
            items: 2
        }
    }
}
const BlogTwo = () => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="blog-two" id='blog'>
            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <TinySlider settings={settings} className="blog-two__carousel">
                    {carouselData.map(({ id, image, link, href, date, year, comments, title, text, author, authorImage, designation }) =>
                        <div key={id} className="item">
                            <div className="blog-card-two wow fadeInUp" data-aos='fade-up' data-aos-duration='1500' data-aos-delay='00ms'>
                                <div className="blog-card-two__image">
                                    <Image src={image} alt={title} />
                                    <Image src={image} alt={title} />
                                    <Link href={href} className="blog-card-two__image__link"><span className="sr-only">{title}</span>
                                    </Link>
                                </div>
                                <div className="blog-card-two__meta">
                                    <div className="blog-card-two__meta__author"><Image src={authorImage} alt="tolak" />{designation}:<Link href={href}>{author}</Link></div>
                                    <div className="blog-card-two__meta__date" dangerouslySetInnerHTML={{ __html: date }}></div>
                                    <div className="blog-card-two__meta__year">{year}</div>
                                    <div className="blog-card-two__meta__comments">
                                        <i className="icofont-speech-comments"></i>Comments ({comments})
                                    </div>
                                </div>
                                <div className="blog-card-two__content">
                                    <h3 className="blog-card-two__title"><Link href={href}>{title}</Link></h3>
                                    <p className="blog-card-two__text">{text}</p>
                                    <Link href={href} className="blog-card-two__link">
                                        Read more
                                        <i className="icofont-rounded-double-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )}
                </TinySlider>

            </Container>
        </section>
    );
};

export default BlogTwo;