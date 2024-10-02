'use client'
import { filterCategories, galleryFilterData } from '@/data/GalleryFilterData';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Masonry from "react-masonry-component";

import GalleryModal from '../GalleryModal/GalleryModal';
const getFilteredProjects = (filterData) =>
    filterData === "filter-item"
        ? galleryFilterData
        : galleryFilterData.filter((project) => project.filterCategory.includes(filterData));
const GalleryFilter = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);
    const [activeFilter, setActiveFilter] = useState("filter-item");
    const filteredProjects = getFilteredProjects(activeFilter);

    console.log(filteredProjects);


    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };


    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        const totalLength = galleryFilterData.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = galleryFilterData[0].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = galleryFilterData.filter((item) => {
            return galleryFilterData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {


        const totalLength = galleryFilterData.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = galleryFilterData[totalLength - 1].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = galleryFilterData.filter((item) => {
            return galleryFilterData.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const masonryOptions = {
        transitionDuration: 500,

    };
    return (
        <section className="gallery-one">
            <Container fluid>
                <div className="text-center">
                    <ul className="list-unstyled post-filter gallery-one__filter__list">
                        {filterCategories.map(({ name, filter }) => (
                            <li
                                key={name}
                                className={filter === activeFilter ? "active" : ""}

                                onClick={() => handleFilterChange(filter)}
                            >
                                <span> {name}</span>


                            </li>
                        ))}

                    </ul>
                </div>
                <Masonry options={masonryOptions} className="row">
                    {filteredProjects.map((item, index) => (
                        <Col key={item.id} md={item.col} lg={item.lg} className={`filter-item ${item.filterCategory.join(' ')}`}>
                            <div className="gallery-one__card">
                                <Image src={item.src} alt={`Gallery ${item.id}`} layout="responsive"
                                    loading="lazy" />
                                <div className="gallery-one__card__hover">
                                    <div onClick={() => handleClick(item.src, index)} className="img-popup">
                                        <span className="gallery-one__card__icon"></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Masonry>
            </Container>
            {clickedImg && (
                <GalleryModal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                    currentIndex={currentIndex}
                    length={galleryFilterData.length}
                />
            )}

        </section>
    );
};

export default GalleryFilter;