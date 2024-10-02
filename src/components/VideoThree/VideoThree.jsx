'use client'
import videoThreeData from '@/data/VideoThreData';
import React, { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
const { bg, videoId } = videoThreeData
const VideoThree = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="video-three wow fadeInUp" data-aos='fade-up'>
                <div className="container">
                    <div className="video-three__inner" style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className="video-three__btn">
                            <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }} className="video-popup">
                                <i className="tolak-icons-two-play"></i>
                            </div>
                            WATCH VIDEO
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
        </>
    );
};

export default VideoThree;