"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useRootContext } from "@/Provider/context";

import useScroll from "@/hooks/useScroll";
import SingleNavItems from "../NavItems/SingleNavItems";
import { useRouter } from "next/navigation";

const { singleNavItems, main_logo } = headerData;

const HeaderSingle = () => {
  const [mounted, setMounted] = useState(false);
  const scrollTop = useScroll(130);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();

  if (!mounted) {
    return null;
  }
  return (
    <header
      className={`main-header sticky-header sticky-header--one-page  ${
        scrollTop ? "active " : ""
      }`}
    >
      <Container fluid>
        <div className='main-header__inner'>
          <div className='main-header__logo'>
            <Link href='/'>
              <Image
                src={main_logo}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header__nav main-menu'>
            <ul className='main-menu__list one-page-scroll-menu'>
              {singleNavItems.map((item, index) => (
                <SingleNavItems key={index} item={item} />
              ))}
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

export default HeaderSingle;
