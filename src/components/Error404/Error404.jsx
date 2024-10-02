import React from 'react';
import image from '@/assets/images/resources/404.jpg'
import Image from 'next/image';
import Link from 'next/link';

const Error404 = () => {
    return (
        <section className="error-404">
            <div className="container">
                <h2 className="error-404__title">
                    Error 404
                </h2>
                <div className="error-404__image wow fadeInUp" data-aos="fade-up">
                    <Image src={image} alt="tolak" />
                </div>
                <h3 className="error-404__sub-title">Page not found</h3>
                <p className="error-404__text">Sorry This Page Not found take a look at our most popular</p>
                <div className="error-404__btns">
                    <Link href="/" className="tolak-btn"><b>Go To Home</b><span></span></Link>
                </div>
            </div>
        </section>

    );
};

export default Error404;