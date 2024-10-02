'use client'
import serviceHomeFourData from '@/data/ServiceHomeFourData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const { bg, tagLine, title, items, shape } = serviceHomeFourData

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

const ServiceHomeFour = () => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="service-one service-one--home-four" style={{ backgroundImage: `url(${bg.src})` }} id='service'>
            <div className="container">
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <div className="tolak-owl__carousel--basic-nav">

                    <TinySlider settings={settings} className='service-one__carousel'>
                        {
                            items.map(({ id, image, title, icon, href, text }) =>
                                <div key={id} className="item">
                                    <div className="service-one__item text-center">
                                        <div className="service-one__item__image">
                                            <Image src={image} alt="tolak" />
                                        </div>
                                        <div className="service-one__item__content">
                                            <div className="service-one__item__icon">
                                                <span className={icon}></span>
                                            </div>
                                            <h3 className="service-one__item__title">
                                                <Link href={href}>{title}</Link>
                                            </h3>
                                            <p className="service-one__item__text">
                                                {text}
                                            </p>
                                        </div>
                                        <div className="service-one__item__bottom">
                                            <div className="service-one__item__bottom__number"></div>
                                            <Link className="service-one__item__bottom__rm" href={href}>Read More<span className="fas fa-angle-double-right"></span></Link>
                                        </div>
                                    </div>
                                </div>)
                        }

                    </TinySlider>
                </div>

            </div>
            <Image className="service-one--home-four__shape" src={shape} alt="tolak" />
        </section>
    );
};

export default ServiceHomeFour;