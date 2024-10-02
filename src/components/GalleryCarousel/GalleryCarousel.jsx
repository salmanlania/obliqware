'use client'
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import { galleryGridData } from "@/data/GalleryGridData";
import GalleryModal from "../GalleryModal/GalleryModal";
import dynamic from "next/dynamic";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const GalleryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);
    const [mounted, setMounted] = useState(false);
    const settings = {
        items: 1,
        gutter: 0,
        loop: false,
        smartSpeed: 700,
        nav: true,
        mouseDrag: true,
        controls: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                gutter: 10
            },
            992: {
                items: 3,
                gutter: 10
            }
        }
    }


    useEffect(() => {
        setMounted(true);
    }, []);



    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        const totalLength = galleryGridData.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = galleryGridData[0].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        setClickedImg(galleryGridData[newIndex].src);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = galleryGridData.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = galleryGridData[totalLength - 1].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        setClickedImg(galleryGridData[newIndex].src);
        setCurrentIndex(newIndex);
    };

    if (!mounted) {
        return null;
    }

    return (
        <section className="gallery-one">
            <Container >
                <div className="tolak-owl__carousel--basic-nav">
                    <TinySlider settings={settings} className='main-slider-one__carousel'>
                        {galleryGridData.map((item, index) => (
                            <div key={item.id} className="item">
                                <div className="gallery-one__card">
                                    <Image src={item.src} alt={item.alt} layout="responsive" />
                                    <div className="gallery-one__card__hover">
                                        <div
                                            onClick={() => handleClick(item.src, index)}
                                            className="img-popup"
                                        >
                                            <span className="gallery-one__card__icon"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>



            </Container>

            {clickedImg && (
                <GalleryModal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                    currentIndex={currentIndex}
                    length={galleryGridData.length}
                />
            )}
        </section>
    );
};

export default GalleryCarousel;
