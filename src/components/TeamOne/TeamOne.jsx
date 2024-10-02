'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import teamOneData from '@/data/TeamOneData';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});


const { tagLine, title, title2, carouselData } = teamOneData



const TeamOne = ({ titleTwo, dots }) => {
    const [mounted, setMounted] = useState(false);

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const settings = {
        items: 1,
        margin: 0,
        loop: false,
        smartSpeed: 700,
        nav: dots ? true : false,
        controls: false,
        mouseDrag: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                gutter: 0
            },
            768: {
                items: 2,
                gutter: 30
            },
            992: {
                items: 3,
                gutter: 30
            }
        }
    }


    return (
        <section className="team-one" id="team">
            <Container>
                <div
                    className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"
                        } text-center`}
                >
                    <h6
                        className={`${titleTwo === "two"
                            ? "sec-title-two__tagline"
                            : "sec-title__tagline"
                            }`}
                    >
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__left icofont-rounded-double-left"
                                : "sec-title__tagline__left"
                                }`}
                        ></span>
                        {tagLine}
                        <span
                            className={`${titleTwo === "two"
                                ? "sec-title-two__tagline__right icofont-rounded-double-right"
                                : "sec-title__tagline__right"
                                }`}
                        ></span>
                    </h6>
                    <h3 className='sec-title__title'>{titleTwo === "two" ? title2 : title}</h3>
                </div>
                <div className={`${dots ? "tolak-owl__carousel--basic-nav" : ""}`}>
                    <TinySlider settings={settings} className="team-one__carousel">
                        {
                            carouselData.map(({ id, image, socials, title, href, designation }) =>
                                <div key={id} className="item">
                                    <div className="team-card wow fadeInUp" data-aos='fade-up' data-wow-duration='1500ms' data-aos-delay='000'>
                                        <div className="team-card__image">
                                            <Image src={image} alt={title} style={{ height: "auto" }} />
                                        </div>
                                        <div className="team-card__content">
                                            <div className="team-card__hover">
                                                <div className="team-card__social">
                                                    <i className="fa fa-plus"></i>
                                                    <div className="team-card__social__list">
                                                        {
                                                            socials.map(({ id, icon, title, link }) => <Link key={id} href={link}>

                                                                <FontAwesomeIcon icon={icon} />
                                                                <span className="sr-only">{title}</span>
                                                            </Link>)
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="team-card__title">
                                                <Link href={href}>{title}</Link>
                                            </h3>
                                            <p className="team-card__designation">{designation}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </TinySlider>

                </div>



            </Container>
        </section >
    );
};

export default TeamOne;