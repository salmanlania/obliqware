'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

import teamFourData from '@/data/TeamFourData';
import Link from 'next/link';
const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });

const { title, tagLine, carouselData } = teamFourData
const settings = {
    items: 1,
    gutter: 30,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    mouseDrag: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
};
const TeamFour = () => {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="team-four" id="team">
            <Container>
                <div className="sec-title-four text-center">

                    <h6 className="sec-title-four__tagline"><span className="sec-title-four__tagline__left-border"></span>{tagLine}<span className="sec-title-four__tagline__right-border"></span></h6>
                    <h3 className="sec-title-four__title">{title}</h3>
                </div>
                <div className="tolak-carousel--basic-nav">
                    <TinySlider settings={settings} className="team-three__carousel">
                        {carouselData.map(({ id, name, image, designation, socialLinks, href }, index) => (
                            <div className="item" key={id}>
                                <div className="team-card-four wow fadeInUp" data-aos='fade-up' data-wow-duration='1500' data-aos-delay={`${index}00`}>
                                    <div className="team-card-four__image">
                                        <Image src={image} alt={name} />
                                        <div className="team-card-four__social">
                                            {socialLinks.map(({ name, href, icon }, index) => (
                                                <Link href={href} key={index}>
                                                    <i className={icon} aria-hidden="true"></i>
                                                    <span className="sr-only">{name}</span>
                                                </Link>
                                            ))}


                                        </div>
                                    </div>
                                    <div className="team-card-four__content">
                                        <h3 className="team-card-four__title">
                                            <Link href={href}>{name}</Link>
                                        </h3>
                                        <p className="team-card-four__designation">{designation}</p>
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

export default TeamFour;