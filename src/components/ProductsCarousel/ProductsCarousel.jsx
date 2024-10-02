"use client";
import React, { useEffect, useState } from "react";
import { productsData } from '@/data/ProductsData';
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import { productsCarouselData } from "@/data/ProductaCarouselData";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});
const settings = {
    items: 1,
    gutter: 0,
    loop: false,
    smartSpeed: 700,
    nav: true,

    controls: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            gutter: 30
        },
        992: {
            items: 3,
            gutter: 30
        },
        1200: {
            items: 4,
            gutter: 30
        }
    }
}
const ProductsCarousel = () => {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="product-one">
            <Container>
                <Row >
                    <Col lg={12} >
                        <div className="tolak-owl__carousel--basic-nav">

                            <TinySlider settings={settings} className='product-one__carousel'>
                                {
                                    productsCarouselData.map((product) => <div className="item" key={product.id}>
                                        <div className="product__item">
                                            <div className="product__item__img">
                                                <Image src={product.image} alt={product.name} />
                                                <div className="product__item__btn">
                                                    <Link href={product.cartHref}>
                                                        <i className="far fa-heart"></i>
                                                    </Link>
                                                    <Link href={product.href}>
                                                        <i className="fas fa-eye"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product__item__content">
                                                <div className="product__item__ratings">
                                                    {[...Array(product.rating)].map((_, index) => (
                                                        <span className="fa fa-star" key={index}></span>
                                                    ))}
                                                </div>
                                                <h4 className="product__item__title">
                                                    <Link href={product.href}>{product.name}</Link>
                                                </h4>
                                                <div className="product__item__price">${product.price}</div>
                                                <Link href={product.cartHref} className="tolak-btn product__item__link">
                                                    <b>Add to Cart</b>
                                                    <span></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </TinySlider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductsCarousel;