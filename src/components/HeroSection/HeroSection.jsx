import { heroSectionData } from '@/data/HeroSectionData';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';


const HeroSection = () => {
    const { bgImage, logo, title, text, button, images } = heroSectionData;

    return (
        <section className="hero-section">
            <div className="hero-section__bg" style={{ backgroundImage: `url(${bgImage.src})` }}>

            </div>
            <div className="container">
                <div className="hero-section__content">
                    <Link href={logo.href} className="hero-section__logo">
                        <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />

                    </Link>
                    <h1 className="hero-section__title">{title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</h1>
                    <p className="hero-section__text">{text.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</p>
                    <Link href={button.href}
                        className="tolak-btn" target={button.target} rel="noreferrer">
                        <b>{button.text}</b><span></span>

                    </Link>
                </div>
            </div>
            <div className="hero-section__arrow"></div>
            <div className="hero-section__badge"></div>
            <div className="hero-section__images">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="wow fadeInRight animated"
                        data-aos-delay={img.animationDelay}
                        style={{ visibility: "visible", animationDelay: img.animationDelay, animationName: "fadeInRight" }}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;

