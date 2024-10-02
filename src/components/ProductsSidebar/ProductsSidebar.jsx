'use client'
import productSidebarData from '@/data/ProductsSidebarData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import React, { useState } from 'react';

const { categories, priceRange } = productSidebarData

const ProductsSidebar = () => {
    const pathname = usePathname()
    const [sliderValue, setSliderValue] = useState([50, 500]);
    const handleSlideChange = (value) => {
        setSliderValue(value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("search"));
    };

    return (
        <div className={`product__sidebar product__sidebar-${pathname === "/products-left" ? "left" : "right"}`}>


            <div className="product__search">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Keywrord..." name='search' />
                </form>
            </div>
            <div className="product__price-ranger">
                <h3 className="product__sidebar--title">Price</h3>
                <div className="price-ranger">
                    <Slider
                        range
                        allowCross={false}
                        value={sliderValue}
                        onChange={handleSlideChange}
                        max={1000}
                        min={50}
                        className="range-slider-price"
                        id="slider-range"
                        draggableTrack
                    />
                    {/* <div id="slider-range"></div> */}
                    <div className="ranger-min-max-block">
                        <div className="left">
                            <p>
                                $ <span className="min">{sliderValue[0]}</span>
                            </p>

                            <span>-</span>
                            <p>
                                $ <span className="max">{sliderValue[1]}</span>
                            </p>
                        </div>

                        <input type="submit" value="Filter" />
                    </div>
                </div>


            </div>
            <div className="product__categories">
                <h3 className="product__sidebar--title">Categories</h3>
                <ul className="list-unstyled">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link href={category.href}>

                                <i className={category.icon}></i> {category.name}

                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default ProductsSidebar;