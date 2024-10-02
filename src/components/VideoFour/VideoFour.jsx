'use client'
import React, { Fragment, useState } from 'react';
import JarallaxImage from '../Jarallax/JarallaxImage';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';
import { videoFourData } from '@/data/VideoFourData';
import dynamic from 'next/dynamic';
import { Parallax } from 'react-parallax';
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});
const { bg, title, tagLine, text, videoId, button } = videoFourData

const VideoFour = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="video-four">
                <Parallax
                    strength={600}
                    bgImage={bg.src}
                    className="video-four__bg"
                >

                </Parallax>
                {/* <Jarallax className="video-four__bg" speed={0.3} imgPosition="center cnter">
                    <JarallaxImage src={bg.src} />
                </Jarallax> */}
                {/* <div className="video-four__bg jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%" style="background-image: url(assets/images/backgrounds/video-bg-4.jpg);"></div> */}
                <div className="video-four__ball-left"></div >
                <div className="video-four__ball-right" ></div >
                <div className="container wow fadeInUp" data-aos='fade-up' >
                    <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }} className="video-popup" >
                        <i className="tolak-icons-two-play" ></i >
                    </div >
                    <div className="sec-title-four text-center" >

                        <h6 className="sec-title-four__tagline" > <span className="sec-title-four__tagline__left-border" ></span > {tagLine} <span className="sec-title-four__tagline__right-border" ></span ></h6 >

                        <h3 className="sec-title-four__title" > {title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</h3 >
                    </div >
                    <p className="video-four__text" >
                        {text.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}
                    </p >
                    <Link href={button.href} className="tolak-btn-two tolak-btn-two--home-six" >
                        <span className="tolak-btn-two__left-star" ></span >
                        <span>{button.text}<i className={button.icon}></i></span >
                        <span className="tolak-btn-two__right-star" ></span >
                    </Link >
                </div >
            </section >
            <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
        </>

    );
};

export default VideoFour;