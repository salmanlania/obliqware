'use client'
import Image from 'next/image';
import React from 'react';
import MegaMenu from '../MegaMenu/MegaMenu';
import NavItems from '../NavItems/NavItems';
import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
const { navItems, main_logo, logo_light, bg } = headerData
import useScrollUp from "@/hooks/useScrollUp";


const HeaderTwoCloned = () => {
    const scrollToTop = useScrollUp(500)
    const { handleToggle, openMegaMenu } = useRootContext()
    return (
        <header className={`main-header-two sticky-header sticky-header--normal sticky-header--cloned  ${scrollToTop ? "active" : ""}`}>
            <div className="container">
                <div className="main-header-two__inner">
                    <div className="main-header-two__inner__bg-one"></div>
                    <div className="main-header-two__inner__bg-two" style={{ backgroundImage: `url(${bg.src})` }}></div>
                    <div className="main-header-two__logo">
                        <a href="/">
                            <Image src={logo_light} alt="Tolak HTML" width={184} style={{ height: "auto" }} />
                        </a>
                    </div>

                    <nav className="main-header-two__nav main-menu">
                        <ul className="main-menu__list">



                            <MegaMenu />

                            {navItems.map(item => <NavItems key={item.id} item={item} />)}


                            <li className="dot"></li>
                        </ul>
                    </nav>
                    <div className="main-header-two__right">
                        <div onClick={handleToggle} className="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="contact.html" className="tolak-btn main-header-two__btn">
                            <b>Get A Quote</b><span></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderTwoCloned;