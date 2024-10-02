'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import teamThreeData from '@/data/TeamThreeData';
import Link from 'next/link';
const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });

const { title, tagLine, teamData } = teamThreeData
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
        }
    }
};
const TeamThree = () => {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="team-three" id="team">
            <Container>
                <div className="sec-title-three text-center">
                    <h6 className="sec-title-three__tagline">
                        <span className="sec-title-three__tagline__left-border"></span>
                        {tagLine}
                        <span className="sec-title-three__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-three__title">{title}</h3>
                </div>
                <div className="tolak-carousel--basic-nav">
                    <TinySlider settings={settings} className="team-three__carousel">
                        {teamData.map(({ id, name, image, designation, socialLinks }) => (
                            <div className="item" key={id}>
                                <div className="team-card-three wow fadeInUp" data-aos='fade-up' data-wow-duration="1500ms" data-aos-delay="00ms">
                                    <div className="team-card-three__image">
                                        <Image src={image} alt={name} />
                                        <div className="team-card-three__social">
                                            {socialLinks.map(({ name, href, icon }, index) => (
                                                <Link href={href} key={index}>
                                                    <i className={icon} aria-hidden="true"></i>
                                                    <span className="sr-only">{name}</span>
                                                </Link>
                                            ))}
                                            <div className="team-card-three__social__toggler">
                                                <i className="fa fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-card-three__content">
                                        <h3 className="team-card-three__title">
                                            <a href="team-details.html">{name}</a>
                                        </h3>
                                        <p className="team-card-three__designation">{designation}</p>
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

export default TeamThree;