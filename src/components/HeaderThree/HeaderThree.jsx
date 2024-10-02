'use client'
import headerData from "@/data/HeaderData";
import { useRootContext } from "@/Provider/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import NavItems from "../NavItems/NavItems";
import useScrollUp from "@/hooks/useScrollUp";
const { navItems, main_logo, logo_light } = headerData;

const HeaderThree = ({ dark }) => {
  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();
  const scrollToTop = useScrollUp(500)


  return (
    <header className={`main-header-three sticky-header sticky-header--normal  ${scrollToTop ? "active" : ""}`}>
      <div className='container'>
        <div className='main-header-three__inner'>
          <div className='main-header-three__logo'>
            <Link href='/'>
              <Image
                src={dark ? logo_light : main_logo}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header-three__nav main-menu'>
            <ul className='main-menu__list'>
              <MegaMenu />
              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}

              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header-three__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href='contact' className='tolak-btn main-header-three__btn'>
              <b>Discover More</b>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
