'use client'
import headerData from "@/data/HeaderData";
import { useRootContext } from "@/Provider/context";
import React from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import NavItems from "../NavItems/NavItems";
import Link from "next/link";
import Image from "next/image";
import useScrollUp from "@/hooks/useScrollUp";
const { navItems, main_logo, headerFourCall } = headerData;

const HeaderFourCloned = () => {
  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();
  const scrollToTop = useScrollUp(500)
  return (
    <header className={`main-header-four sticky-header sticky-header--normal sticky-header--cloned  ${scrollToTop ? " active" : ""}`}>
      <div className='container-fluid'>
        <div className='main-header-four__inner'>
          <div className='main-header-four__logo'>
            <Link href='/'>
              <Image
                src={main_logo}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header-four__nav main-menu'>
            <ul className='main-menu__list'>
              <MegaMenu />
              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}

              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header-four__right'>
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
              className='search-toggler main-header-four__search'
            >
              <i className='icon-magnifying-glass' aria-hidden='true'></i>
              <span className='sr-only'>Search</span>
            </Link>
            <Link href='cart' className='main-header-four__cart'>
              <i className='icon-shopping-cart' aria-hidden='true'></i>
              <span className='main-header-four__cart__count'>02</span>
              <span className='sr-only'>Search</span>
            </Link>
            <Link
              className='main-header-four__call'
              href={`${headerFourCall.subHref}:${headerFourCall.href}`}
            >
              <span className='main-header-four__call__icon'>
                <i className={headerFourCall.icon}></i>
              </span>
              <span className='main-header-four__call__content'>
                <span className='main-header-four__call__text'>
                  {headerFourCall.text}
                </span>
                <span className='main-header-four__call__number'>
                  {headerFourCall.number}
                </span>
              </span>
            </Link>
            <Link
              href='#'
              onClick={toggleSidebar}
              className='main-header-four__toggler'
            >
              <div className='main-header-four__toggler__wrapper'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFourCloned;
