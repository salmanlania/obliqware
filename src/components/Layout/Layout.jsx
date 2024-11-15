"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Script from "next/script";

// import WOW from 'wowjs';
import CustomCursor from "../CustomCursor/CustomCursor";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import MobileNav from "../MobileNav/MobileNav";
import Sidebar from "../Sidebar/Sidebar";
import ScrollTop from "../ScrollTop/ScrollTop";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, pageTitle }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const trackPageView = (path) => {
    if (window.gtag) {
      console.log("Tracking page view:", path); // Debug log
      gtag("config", "G-F22MLNCZ7T", {
        page_path: path,
      });
      gtag("config", "AW-16761372846", {
        page_path: path,
      });
    } else {
      console.warn("gtag is not defined"); // Debug log if gtag is not available
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    trackPageView(pathname);

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
  }, [mounted]);

  // useEffect(() => {
  //   if (window.gtag) {
  //     // Trigger Google Analytics pageview
  //     console.log("Tracking page view:", pathname);
  //     gtag("config", "G-F22MLNCZ7T", {
  //       page_path: pathname,
  //     });

  //     // Trigger Google Ads pageview
  //     gtag("config", "AW-16761372846", {
  //       page_path: pathname,
  //     });
  //   }else {
  //     console.warn("gtag is not defined");
  //   }
  // }, [pathname]);

  useEffect(() => {
    trackPageView(pathname);
  }, []); // Run on initial mount

  // Tracking for route changes
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-F22MLNCZ7T"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F22MLNCZ7T');
          `,
        }}
      />

      {/* Google Ads Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16761372846"
      />
      <Script
        strategy="afterInteractive"
        id="google-ads"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16761372846');
          `,
        }}
      />

      <CustomCursor />
      <Preloader />
      <div className='page-wrapper'>
        {children}
      </div>
      <MobileNav />
      <Search />
      <Sidebar />
      <ScrollTop />
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
