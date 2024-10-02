'use client'

import clientCarouselData from '@/data/ClientCarouselData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const { titleSix, carouselData } = clientCarouselData
const ClientCarousel = ({ pageTitle, dark }) => {



    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const settings = {
        items: 5,
        gutter: 30,

        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        mouseDrag: true,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,

        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }
    return (
        <div className={`client-carousel ${pageTitle === "homeTwo" ? "client-carousel--two" : pageTitle === "homeFour" ? "client-carousel--three" : pageTitle === "homeSix" ? "client-carousel--six" : pageTitle === "homeSeven" ? "client-carousel--six" : pageTitle === "teamDetails" ? "client-carousel--no-border" : pageTitle === "homeThree" ? "" : pageTitle === "homeFive" ? "client-carousel--five" : "no-border"} `}>
            {
                pageTitle === "homeSix" || pageTitle === "homeSeven" ?
                    <h5 className="client-carousel--six__title">
                        <span className="client-carousel--six__title__border"></span>
                        <span className="client-carousel--six__title__bg">{titleSix}</span>
                        <span className="client-carousel--six__title__border"></span>
                    </h5> : null
            }
            <Container >
                {
                    pageTitle === "homeFive" ?
                        <h5 className="client-carousel--five__title">
                            <span className="client-carousel--five__title__border"></span>
                            <span className="client-carousel--five__title__bg">{titleSix}</span>
                            <span className="client-carousel--five__title__border"></span>
                        </h5> : null
                }
                <TinySlider settings={settings} className="client-carousel__one">
                    {
                        carouselData.map(({ id, bg, hoverBg, bg2, hoverBg2, bg3, hoverBg3, bgDark, hoverBgDark }) =>
                            <div key={id}>
                                <div className="client-carousel__one__item">
                                    <Image className="client-carousel__one__item__normal" src={pageTitle === "homeFive" ? bg2 : pageTitle === 'homeSix' ? bg3 : pageTitle === "homeSeven" ? bg3 : dark ? bgDark : bg} alt=" tolak" />
                                    <Image className="client-carousel__one__item__hover" src={pageTitle === "homeFive" ? hoverBg2 : pageTitle === 'homeSix' ? hoverBg3 : pageTitle === 'homeSeven' ? hoverBg3 : dark ? hoverBgDark : hoverBg} alt=" tolak" />
                                </div>
                            </div>

                        )
                    }
                </TinySlider>

            </Container>
        </div>

    );
};

export default ClientCarousel;