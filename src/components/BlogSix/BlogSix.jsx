"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import blogSixData from "@/data/BlogSixData";
import { Container } from "react-bootstrap";
import Link from "next/link";


const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
const { items, tagline, title } = blogSixData;
const BlogSix = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const settings = {
    items: 1,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: false,

    controls: false,
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
  if (!mounted) {
    return null;
  }

  return (
    <div className='blog-six' id='blog'>
      <Container>
        <div className='sec-title-four text-center'>
          <h6 className='sec-title-four__tagline'>
            <span className='sec-title-four__tagline__left-border'></span>
            {tagline}
            <span className='sec-title-four__tagline__right-border'></span>
          </h6>
          <h3 className='sec-title-four__title'>{title}</h3>
        </div>

        <TinySlider settings={settings} className='blog-two__carousel'>
          {items.map(
            ({
              id,
              image,
              date,
              author,
              comments,
              link,
              title,
              description,
            }) => {
              // Split the date string into date and month
              const [day, month] = date.split(" ");

              return (
                <div className='item' key={id}>
                  <div className='blog-card-six'>
                    <div
                      className='blog-card-six__image'
                      style={{ backgroundImage: `url(${image.src})` }}
                    ></div>
                    <div className='blog-card-six__date'>
                      {day} <span>{month}</span>
                    </div>
                    <ul className='list-unstyled blog-card-six__meta'>
                      <li>
                        <i className='tolak-icons-two-user'></i>By:{" "}
                        <Link href='/blog-list-right'>{author}</Link>
                      </li>
                      <li>
                        <i className='tolak-icons-two-comments'></i>Comments (
                        {comments})
                      </li>
                    </ul>
                    <h3 className='blog-card-six__title'>
                      <Link href={link}>{title}</Link>
                    </h3>
                    <p className='blog-card-six__text'>{description}</p>
                    <Link className='blog-card-six__rm' href={link}>
                      <span className='tolak-icons-two-arrow-right-short'></span>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </TinySlider>
      </Container>
    </div>
  );
};

export default BlogSix;
