'use client'
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/useScroll";
import useScrollUp from "@/hooks/useScrollUp";

const { navItems, logo_light } = headerData;
const HeaderInner = () => {
  const scrollToTop = useScrollUp(500);
  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();
  return (
    <header className={`main-header-inner sticky-header sticky-header--normal  ${scrollToTop ? "active" : ""}`}>
      <div className='container'>
        <div className='main-header-inner__inner'>
          <div className='main-header-inner__logo'>
            <Link href='/'>
              <Image
                src={logo_light}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header-inner__nav main-menu'>
            <ul className='main-menu__list'>
              <MegaMenu />

              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}
              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header-inner__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link
              onClick={toggleSearch}
              href='#'
              className='search-toggler main-header-inner__search'
            >
              <i className='icon-magnifying-glass'></i>
            </Link>
            <Link href='contact' className='tolak-btn main-header-inner__btn'>
              <b>Discover More</b>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderInner;
