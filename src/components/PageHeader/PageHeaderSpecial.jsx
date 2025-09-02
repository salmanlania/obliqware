"use client";

import Image from "next/image";
import React from "react";
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
// import bannerLayer from "@/assets/images/backgrounds/page-banner-layer.webp";
// import bannerLayer from "@/assets/images/backgrounds/man-stand.jpg";
import bannerLayer from "@/assets/images/backgrounds/man-standing-laptop.png";
import Link from "next/link";

const PageHeader = ({ title, subTitle }) => {
  const pathname = usePathname();

  const allowedPaths = [
    '/web-development',
    '/mobile-app-development',
    '/ai-solution',
    '/ui-ux-design',
    '/graphic-design',
    '/specialized-offerings',
  ];

  const scrollToContactService = () => {
    const element = document.getElementById('contact-service-one');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='page-header'>
      <div className='page-header__bg'></div>
      <div className='page-header__shape'></div>
      <div className='page-header__shape-two'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='page-header__content'>
              <h2 className='page-header__title'>{title}</h2>
              <ul className='tolak-breadcrumb list-unstyled'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <span>{subTitle}</span>
                </li>
              </ul>
              {/* <div className='main-slider-one__bottom'>
                <div className='main-slider-one__btn'>
                  <a
                    href='/contact'
                    className='tolak-btn tolak-btn--base'
                  >
                    <b>Contact Now</b>
                    <span></span>
                  </a>
                </div>
              </div> */}
              {/* <div style={{ marginTop: '2rem' }} className='main-slider-one__bottom'>
                <a
                  href='#contact-service-one'
                  className='tolak-btn tolak-btn--base'
                >
                  <b>Get a Free Quote</b>
                  <span></span>
                </a>
              </div> */}
              <div style={{ marginTop: '2rem' }} className='main-slider-one__bottom'>
                {allowedPaths.includes(pathname) && (
                  <a onClick={scrollToContactService}className='tolak-btn tolak-btn--base'>
                    <b>Get a Free Quote</b>
                    <span></span>
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className='col-md-5'>
            <div className='page-header__layer wow fadeInUp' data-aos='fade-up' data-aos-delay='100'>
              <Image src={bannerLayer} alt='tolak' />
              <div className='page-header__layer__shape'></div>
              <div
                className='page-header__layer__bg wow fadeInRight' data-aos='fade-left'
                data-aos-delay='200'
              ></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
