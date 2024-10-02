"use client";
import React, { Fragment, useState } from "react";

import ctaNineData from "@/data/CtaNine";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
const { bg, listItems, subtitle, text, title, videoId } = ctaNineData;
const CtaNine = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className='cta-nine'>
        <Parallax className='cta-nine__bg' strength={600} bgImage={bg.src}>

        </Parallax>

        <Container>
          <h5 className='cta-nine__sub-title'>{subtitle}</h5>
          <h2 className='cta-nine__title'>{title}</h2>
          <p className='cta-nine__text'>
            {text.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </p>
          <div className='cta-nine__btn'>
            <a href='services' className='tolak-btn-two tolak-btn-two--home-seven'>
              <span className='tolak-btn-two__left-star'></span>
              <span>
                Learn More<i className='tolak-icons-two-arrow-right-short'></i>
              </span>
              <span className='tolak-btn-two__right-star'></span>
            </a>
            <div
              onClick={() => setOpen(true)}
              className='video-popup'
              style={{ cursor: "pointer" }}
            >
              <i className='tolak-icons-two-play'></i>WATCH VIDEO
            </div>
          </div>
          <ul className='cta-nine__list'>
            {listItems.map(({ icon, text }, index) => (
              <li key={index}>
                <i className={icon}></i>
                {text}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default CtaNine;
