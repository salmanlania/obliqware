"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

const topbarThreeData = [
  "Wellcome To It-Solution !",
  "Best It-Solution Business !",
];
const settings = {
  loop: true,
  mode: "gallery",
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const TopbarThree = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className='topbar-three'>
      <Container>
        <TinySlider settings={settings} className='topbar-three__carousel'>
          <div className='item'>
            <p className='topbar-three__text'>Wellcome To It-Solution !</p>
          </div>
          <div className='item'>
            <p className='topbar-three__text'>Best It-Solution Business !</p>
          </div>
        </TinySlider>
      </Container>
    </div>
  );
};

export default TopbarThree;
