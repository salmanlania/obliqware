'use client'
import headerData from "@/data/HeaderData";
import { useRootContext } from "@/Provider/context";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import SingleNavItems from "../NavItems/SingleNavItems";
const { main_logo, headerFourCall, singleNavItemsFour } = headerData;


const HeaderFourSingleCloned = () => {
    const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();
    const scrollTop = useScroll(130)
    const [activeLink, setActiveLink] = useState("#home");


    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <header className={`main-header-four sticky-header sticky-header--one-page sticky-header--cloned  ${scrollTop ? "active " : ""}`}>
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

                            {singleNavItemsFour.map((item, index) => (
                                <SingleNavItems key={index} item={item} />
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

export default HeaderFourSingleCloned;