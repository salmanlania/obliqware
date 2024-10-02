'use client'
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import { galleryGridData } from "@/data/GalleryGridData";
import GalleryModal from "../GalleryModal/GalleryModal";


const GalleryGridCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);

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

    return (
        <section className="gallery-one">
            <Container fluid>
                <Row>
                    {galleryGridData.map((item, index) => (
                        <Col key={item.id} md={6} lg={3}>
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
                        </Col>
                    ))}
                </Row>
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

export default GalleryGridCarousel;
