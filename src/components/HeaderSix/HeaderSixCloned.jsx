'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MegaMenu from '../MegaMenu/MegaMenu';
import NavItems from '../NavItems/NavItems';
import { Container } from 'react-bootstrap';
import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
import useScrollUp from '@/hooks/useScrollUp';
const { navItems, logo5 } = headerData;
const HeaderSixCloned = () => {
    const scrollToTop = useScrollUp(500);
    const { toggleSearch, handleToggle } = useRootContext();
    return (
        <header className={`main-header-six sticky-header sticky-header--normal sticky-header--cloned  ${scrollToTop ? "active" : ""}`}>
            <Container >
                <div className="main-header-six__inner">
                    <div className="main-header-six__logo">
                        <Link href='/'>
                            <Image
                                src={logo5}
                                alt='Tolak HTML'
                                width={184}
                                style={{ height: "auto" }}
                            />
                        </Link>
                    </div>
                    <nav className="main-header-six__nav main-menu">
                        <ul className="main-menu__list">


                            <MegaMenu />


                            {navItems.map((item) => (
                                <NavItems key={item.id} item={item} />
                            ))}

                            <li className="dot"></li>
                        </ul>
                    </nav>
                    <div className="main-header-six__right">
                        <div onClick={handleToggle} className="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link onClick={toggleSearch} href="#" className="search-toggler main-header-six__search">
                            <i className="icon-magnifying-glass" aria-hidden="true"></i>
                            <span className="sr-only">Search</span>
                        </Link>
                        <Link href="contact" className="tolak-btn-two main-header-six__btn">
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

export default HeaderSixCloned;