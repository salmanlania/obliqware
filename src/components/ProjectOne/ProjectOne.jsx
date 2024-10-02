"use client";
import projectOneData from "@/data/ProjectOneData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});
const { title, tagLine, carouselData } = projectOneData;
const settings = {
  items: 1,
  gutter: 30,
  loop: false,
  smartSpeed: 700,
  nav: false,
  mouseDrag: true,

  controls: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1600: {
      items: 4,
    },
  },
};

const PojectOne = ({ titleTwo }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className='project-one' id='project'>
      <Container>
        <div
          className={`${titleTwo === "two" ? "sec-title-two" : "sec-title"
            } text-center`}
        >
          <h6
            className={`${titleTwo === "two"
              ? "sec-title-two__tagline"
              : "sec-title__tagline"
              }`}
          >
            <span
              className={`${titleTwo === "two"
                ? "sec-title-two__tagline__left icofont-rounded-double-left"
                : "sec-title__tagline__left"
                }`}
            ></span>
            {tagLine}
            <span
              className={`${titleTwo === "two"
                ? "sec-title-two__tagline__right icofont-rounded-double-right"
                : "sec-title__tagline__right"
                }`}
            ></span>
          </h6>
          <h3 className='sec-title__title'>{title}</h3>
        </div>
        <TinySlider settings={settings} className='project-one__carousel'>
          {carouselData.map(({ id, image, title, href, cats, catsHref }) => (
            <div key={id} className='item'>
              <div className='project-one__item'>
                <div className='project-one__image'>
                  <Image src={image} alt='tolak' />
                </div>
                <div className='project-one__hover'>
                  <Link className='project-one__read-more' href={href}>
                    <span className='icon-right-arrow'></span>
                  </Link>
                  <div className='project-one__hover-bottom'>
                    <div className='project-one__cats'>
                      <Link href={catsHref}>{cats}</Link>
                    </div>
                    <h3 className='project-one__title'>
                      <Link href={href}>{title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </Container>
    </section>
  );
};

export default PojectOne;
