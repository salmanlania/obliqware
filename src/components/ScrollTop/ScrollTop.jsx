"use client";


import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      let percentage = (scrollPos / bodyHeight) * 100;
      if (percentage > 100) {
        percentage = 100;
      }
      setPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <ScrollToTop
      smooth
      component={
        <a className="">
          <span className="scroll-to-top__text">back top</span>
          <span className="scroll-to-top__wrapper"><span style={{ width: `${percentage}%` }} className="scroll-to-top__inner"></span></span>
        </a>
      }
    />
  );
};

export default ScrollTop;
