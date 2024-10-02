"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";

// import WOW from 'wowjs';
import CustomCursor from "../CustomCursor/CustomCursor";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import MobileNav from "../MobileNav/MobileNav";
import Sidebar from "../Sidebar/Sidebar";
import ScrollTop from "../ScrollTop/ScrollTop";
import { usePathname } from "next/navigation";

const LayoutRtl = ({ children, pageTitle }) => {
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tolakBtns = document.querySelectorAll(".tolak-btn");

    const handleMouseEnter = (e) => {
      const btn = e.currentTarget;
      const parentOffset = btn.getBoundingClientRect();
      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const span = btn.querySelector("span");

      if (span) {
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      }
    };

    const handleMouseOut = (e) => {
      const btn = e.currentTarget;
      const parentOffset = btn.getBoundingClientRect();
      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const span = btn.querySelector("span");

      if (span) {
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      }
    };

    tolakBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseout", handleMouseOut);
    });

    // Clean up event listeners on component unmount
    return () => {
      tolakBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [mounted]);




  useEffect(() => {
    if (!mounted) return;

    AOS.init();
    // if (typeof window !== "undefined") {
    //   const wow = new WOW.WOW({ ssr: false });
    //   wow.init();
    // }

  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <Preloader />
      <div className='page-wrapper'>
        {children}
      </div>
      <MobileNav />
      <Search />
      <Sidebar />
      <ScrollTop />
    </>
  );
};

export default LayoutRtl;
