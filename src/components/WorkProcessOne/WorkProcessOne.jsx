'use client'
import workProcessOneData from '@/data/WorkProcessOneData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const { bg, title, tagLine, carouselData } = workProcessOneData
const settings = {

    items: 4,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: true,


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
        },
        1200: {
            items: 4
        }
    }
}

const WorkProcessOne = () => {
    return (
        <section className="work-process-one" style={{ backgroundImage: `url(${bg.src})` }}>
            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <div className="tolak-owl__carousel--basic-nav">
                    <TinySlider settings={settings} className="work-process-one__carousel ">
                        {carouselData.map(({ id, title, text, href, bg, image }) =>
                            <div key={id} className="item">
                                <div className="work-process-one__item text-center wow fadeInUp" data-aos='fade-up' data-aos-delay="00ms">
                                    <div className="work-process-one__item__hover" style={{ backgroundImage: `url(${bg.src})` }}></div>
                                    <div className="work-process-one__item__thumb">
                                        <Image src={image} alt="tolak" />
                                        <div className="work-process-one__item__thumb__number"></div>
                                    </div>
                                    <h4 className="work-process-one__item__title">{title}</h4>
                                    <p className="work-process-one__item__text">
                                        {text}
                                    </p>
                                    <Link href={href} className="work-process-one__item__rm"><i className="icon-right-arrow"></i></Link>
                                </div>
                            </div>

                        )}

                    </TinySlider>
                </div>



            </Container>
        </section>
    );
};

export default WorkProcessOne;