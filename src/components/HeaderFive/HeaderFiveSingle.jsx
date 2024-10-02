'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavItems from '../NavItems/NavItems';
import { Container } from 'react-bootstrap';
import useScroll from '@/hooks/useScroll';
import { useRootContext } from '@/Provider/context';
import headerData from '@/data/HeaderData';
import SingleNavItems from '../NavItems/SingleNavItems';
const { logo3, singleNavItemsFive } = headerData;

const HeaderFiveSingle = () => {
    const scrollTop = useScroll(130);
    const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();

    return (
        <header className={`main-header-five sticky-header sticky-header--one-page  ${scrollTop ? "active " : ""}`}>
            <Container >
                <div className="main-header-five__inner">
                    <div className="main-header-five__logo">
                        <Link href='/'>
                            <Image src={logo3} alt="Tolak HTML" width={184}
                                style={{ height: "auto" }} />
                        </Link>
                    </div>
                    <nav className="main-header-five__nav main-menu">
                        <ul className="main-menu__list">




                            {singleNavItemsFive.map((item, index) => (
                                <SingleNavItems key={index} item={item} />
                            ))}


                        </ul>
                    </nav>
                    <div className="main-header-five__right">
                        <div onClick={handleToggle} className="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link href="#" className="search-toggler main-header-five__search" onClick={toggleSearch}>
                            <i className="icon-magnifying-glass" aria-hidden="true"></i>
                            <span className="sr-only">Search</span>
                        </Link>
                        <Link href="contact" className="tolak-btn-two main-header-five__btn">
                            <span className="tolak-btn-two__left-star"></span>
                            <span>Contact Us<i className="tolak-icons-two-arrow-right-short"></i></span>
                            <span className="tolak-btn-two__right-star"></span>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default HeaderFiveSingle;