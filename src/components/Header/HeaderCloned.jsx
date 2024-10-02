"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import MegaMenu from "../MegaMenu/MegaMenu";

import useScrollUp from "@/hooks/useScrollUp";


const { navItems, main_logo, logo_light, logo_rtl } = headerData;

const HeaderCloned = ({ dark, rtl }) => {
  const [mounted, setMounted] = useState(false)
  const scrollToTop = useScrollUp(500)
  useEffect(() => {
    setMounted(true)
  }, [])


  const { toggleSearch, handleToggle, toggleSidebar, openMegaMenu } = useRootContext();

  if (!mounted) {
    return null
  }
  return (
    <header className={`main-header sticky-header sticky-header--normal sticky-header--cloned  ${scrollToTop ? " active" : ""}`}>
      <Container fluid>
        <div className='main-header__inner'>
          <div className='main-header__logo'>
            <Link href='/'>
              <Image
                src={dark ? logo_light : rtl ? logo_rtl : main_logo}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header__nav main-menu'>
            <ul className='main-menu__list'>
              <MegaMenu pageTitle='home' />


              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}

              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link
              href='#'
              onClick={toggleSearch}
              className='search-toggler main-header__search'
            >
              <i className='icon-magnifying-glass' aria-hidden='true'></i>
              <span className='sr-only'>Search</span>
            </Link>
            {/* <a href='cart' className='main-header__cart'>
              <i className='icon-shopping-cart' aria-hidden='true'></i>
              <span className='sr-only'>Search</span>
            </a> */}
            <Link
              href='#'
              className='main-header__toggler'
              onClick={toggleSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link href='contact' className='tolak-btn main-header__btn'>
              <b>Discover More</b>
              <span></span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderCloned;
