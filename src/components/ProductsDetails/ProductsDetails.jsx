
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsDetailsData } from '@/data/ProductsDetailsData';
const inputs = ["name", "email", "message"];
const ProductsDetails = () => {
    const {
        image,
        title,
        price,
        reviewsCount,
        reviewStars,
        excerptText1,
        excerptText2,
        description,
        comments,
        socialLinks
    } = productsDetailsData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const fromData = new FormData(e.target);
        const data = {};
        inputs.forEach((input) => (data[input] = fromData.get(input)));
        console.log(data);
    };
    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 wow fadeInLeft" data-aos='fade-right' data-aos-delay="200">
                        <div className="product-details__img">
                            <Image src={image} alt={title} />
                            <div className="product-details__img-search">
                                <Link className="img-popup" href={image}><span className="icon-magnifying-glass"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 wow fadeInRight" data-aos='fade-left' data-aos-delay="300">
                        <div className="product-details__content">
                            <div className="product-details__top">
                                <h3 className="product-details__title">{title}</h3>
                                <div className="product-details__price">${price.toFixed(2)}</div>
                            </div>
                            <div className="product-details__review">
                                {[...Array(reviewStars)].map((_, index) => (
                                    <span key={index} className="fa fa-star"></span>
                                ))}
                                <Link href="/product-details">{reviewsCount} Customer Reviews</Link>
                            </div>
                            <div className="product-details__divider"></div>
                            <div className="product-details__excerpt">
                                <p className="product-details__excerpt-text1">{excerptText1}</p>
                                <p className="product-details__excerpt-text2">{excerptText2}</p>
                            </div>
                            <div className="product-details__quantity">
                                <h3 className="product-details__quantity-title">Quantity</h3>
                                <div className="quantity-box">
                                    <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                    <input type="text" id="1" defaultValue="1" />
                                    <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                </div>
                            </div>
                            <div className="product-details__buttons">
                                <Link href="/cart" className="tolak-btn"><b>Add to Cart</b><span></span></Link>
                                <Link href="/cart" className="tolak-btn"><b>Add to wishlist</b><span></span></Link>
                            </div>
                            <div className="product-details__socials">
                                <h4 className="product-details__socials__title">Share with friends</h4>
                                {socialLinks.map(({ name, href, icon }) => (
                                    <Link key={name} href={href} aria-label={name}>
                                        <i className={icon} aria-hidden="true"></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details__description wow fadeInUp" data-aos='fade-up' data-aos-delay="300">
                    <h3 className="product-details__description__title">{description.title}</h3>
                    <p className="product-details__description__text">{description.text}</p>
                    <ul className="list-unstyled product-details__description__lists">
                        {description.list.map((item, index) => (
                            <li key={index}><span className="icon-right-arrow"></span>{item}</li>
                        ))}
                    </ul>
                    <p className="product-details__description__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                </div>
                <div className="product-details__comment wow fadeInUp" data-aos='fade-up' data-aos-delay="400ms">
                    <h3 className="product-details__review-title">Comments ({comments.length})</h3>
                    {comments.map(({ id, author, date, time, rating, text, avatar }) => (
                        <div key={id} className="product-details__comment-box">
                            <figure className="product-details__comment-box__thumb">
                                <Image src={avatar} alt={author} width={50} height={50} />
                            </figure>
                            <h4 className="product-details__comment-box__meta">
                                {author}<span className="product-details__comment-box__date">{date} . {time}</span>
                            </h4>
                            <div className="product-details__comment-box__ratings">
                                {[...Array(rating)].map((_, index) => (
                                    <span key={index} className="fa fa-star"></span>
                                ))}
                            </div>
                            <p className="product-details__comment-box__text">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="product-details__form wow fadeInUp" data-aos='fade-up' data-aos-delay="500ms">
                    <h3 className="product-details__form-title">Add a review</h3>
                    <div className="product-details__form-ratings">
                        <p className="product-details__form-ratings__label">Rate this product?</p>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="fa fa-star"></span>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="comments-form__form contact-form-validated product-details__form__form form-one">
                        <div className="form-one__group">
                            <div className="form-one__control form-one__control--full">
                                <textarea name="message" placeholder="Write a message"></textarea>
                            </div>
                            <div className="form-one__control">
                                <input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="form-one__control">
                                <input type="email" name="email" placeholder="Your Email" />
                            </div>

                            <div className="form-one__control form-one__control--full">
                                <button type="submit" className="tolak-btn"><b>Submit Review</b><span></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default ProductsDetails;
