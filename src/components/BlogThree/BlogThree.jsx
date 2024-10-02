"use client";
import blogThreeData from "@/data/BlogThreeData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const { tagLine, title, carouselData } = blogThreeData;

const BlogThree = ({ page }) => {
  const [mounted, setMounted] = useState(false);
  const settings = {
    items: 1,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: page === 'carousel' ? true : false,
    controls: false,
    mouseDrag: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className='blog-three' id="blog">
      <div className='container'>
        {
          page === "carousel" ? null : <div className='sec-title-two text-center'>
            <h6 className='sec-title-two__tagline'>
              <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
              {tagLine}
              <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
            </h6>
            <h3 className='sec-title-two__title'>{title}</h3>
          </div>
        }

        <div className='tolak-owl__carousel--basic-nav'>
          <TinySlider settings={settings} className='blog-three__carousel'>
            {carouselData.slice(0, (page === 'carousel' ? carouselData.length : 3)).map(
              ({
                id,
                image,
                href,
                date,
                year,
                comments,
                title,
                text,
                author,
                authorImage,
                designation,
              }) => (
                <div key={id} className='item'>
                  <div
                    className='blog-card-three wow fadeInUp'
                    data-aos='fade-up'
                    data-aos-duration='1500'
                    data-aos-delay='00ms'
                  >
                    <div className='blog-card-three__image'>
                      <Image
                        src={image}
                        alt={title}
                        style={{ height: "auto" }}
                      />
                      <Image
                        src={image}
                        alt={title}
                        style={{ height: "auto" }}
                      />
                      <div className='blog-card-three__date'>
                        <div dangerouslySetInnerHTML={{ __html: date }} />
                        <div className='blog-card-three__date__year'>{year}</div>
                      </div>
                      <Link href={href} className='blog-card-three__image__link'>
                        <i className='icon-right-arrow'></i>
                        <span className='sr-only'>{title}</span>
                      </Link>
                    </div>
                    <div className='blog-card-three__content'>
                      <h3 className='blog-card-three__title'>
                        <a href={href}>{title}</a>
                      </h3>
                      <p className='blog-card-three__text'>{text}</p>
                      <div className='blog-card-three__meta'>
                        <div className='blog-card-three__meta__author'>
                          <Image src={authorImage} alt='tolak' />
                          {designation}:<Link href={href}>{author}</Link>
                        </div>
                        <div className='blog-card-three__meta__comments'>
                          <i className='icofont-speech-comments'></i>Comments (
                          {comments})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </TinySlider>
        </div>
      </div>
    </section>
  );
};

export default BlogThree;
