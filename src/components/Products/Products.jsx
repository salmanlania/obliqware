'use client'
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { productsData } from "@/data/ProductsData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProductsSidebar from "../ProductsSidebar/ProductsSidebar";
import Select from "react-select";
import CustomSelect from "../CustomSelect/CustomSelect";


const options = ["Sort by Popular", "Sort by View", "Sort by Price", "Sort by Rattings"].map(
    (it) => ({
        value: it,
        label: it,
    })
);


const Products = () => {
    const pathname = usePathname()

    const [sortBy, setSortBy] = useState("Sort by Popular");

    const handleSelectSortBy = ({ value }) => {
        setSortBy(value);
    };
    return (
        <section className="product-one">
            <Container>
                <Row className="justify-content-center">
                    {
                        pathname === "/products-left" ? <Col lg={3}>
                            <ProductsSidebar />
                        </Col> : null
                    }
                    <Col lg={pathname === "/products-left" || pathname === "/products-right" ? 9 : 12}>

                        <div className="product__info-top">
                            <div className="product__showing-text-box">
                                <p className="product__showing-text">Showing 1–9 of 12 Results</p>
                            </div>
                            <div className="product__showing-sort">
                                <CustomSelect
                                    name="sortBy"
                                    options={options}
                                    onChange={handleSelectSortBy}
                                    instanceId="sortBySelect21"
                                    defaultValue={options[0]}
                                />
                            </div>
                        </div>

                        <Row className="gutter-y-30">
                            {productsData.map((product) => (
                                <Col md={6} lg={pathname === "/products-left" || pathname === "/products-right" ? 4 : 3} key={product.id}>
                                    <div className="product__item">
                                        <div className="product__item__img">
                                            <Image src={product.image} alt={product.title} />
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
                                                <Link href={product.href}>{product.title}</Link>
                                            </h4>
                                            <div className="product__item__price">${product.price}</div>
                                            <Link href={product.cartHref} className="tolak-btn product__item__link">
                                                <b>Add to Cart</b>
                                                <span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    {
                        pathname === "/products-right" ? <Col lg={3}>
                            <ProductsSidebar />
                        </Col> : null
                    }
                </Row>
            </Container>
        </section >
    );
};

export default Products;
