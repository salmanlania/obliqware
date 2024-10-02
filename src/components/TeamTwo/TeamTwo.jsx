"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import teamTwoData from "@/data/TeamTwoData";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const { tagLine, title, carouselData, bg } = teamTwoData;

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
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const TeamTwo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className='team-two' style={{ backgroundImage: `url(${bg.src})` }} id="team">
      <Container>
        <div className='sec-title-two text-center'>
          <h6 className='sec-title-two__tagline'>
            <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
            {tagLine}
            <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
          </h6>
          <h3 className='sec-title-two__title'>{title}</h3>
        </div>
        <TinySlider settings={settings} className='team-Two__carousel'>
          {carouselData.map(
            ({ id, image, socials, title, href, designation }) => (
              <div key={id} className='item'>
                <div
                  key={id}
                  className='team-card-two wow fadeInUp' data-aos='fade-up'
                  data-aos-duration='1500'
                  data-aos-delay='000'
                >
                  <div className='team-card-two__image'>
                    <Image src={image} alt={title} style={{ height: "auto" }} />
                  </div>
                  <div className='team-card-two__image-bg'></div>
                  <div className='team-card-two__content'>
                    <div className='team-card-two__hover'>
                      <div className='team-card-two__social'>
                        <i className='fa fa-plus'></i>
                        <div className='team-card-two__social__list'>
                          {socials.map(({ id, icon, title, link }) => (
                            <Link key={id} href={link}>
                              <FontAwesomeIcon icon={icon} />
                              <span className='sr-only'>{title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <h3 className='team-card-two__title'>
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className='team-card-two__designation'>{designation}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </TinySlider>
      </Container>
    </section>
  );
};

export default TeamTwo;
