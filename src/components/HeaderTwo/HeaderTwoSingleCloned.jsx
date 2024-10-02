'use client'
import useScroll from '@/hooks/useScroll';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleNavItems from '../NavItems/SingleNavItems';
import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
const { singleNavItemsTwo, logo_light, bg } = headerData;

const HeaderTwoSingleCloned = () => {
    const [mounted, setMounted] = useState(false)
    const scrollTop = useScroll(130);
    useEffect(() => {
        setMounted(true)
    }, [])
    const { handleToggle } = useRootContext();

    if (!mounted) {
        return null
    }
    return (
        <header className={`main-header-two sticky-header sticky-header--one-page sticky-header--cloned   ${scrollTop ? "active " : ""}`}>
            <Container >
                <div className="main-header-two__inner">
                    <div className="main-header-two__inner__bg-one"></div>
                    <div className="main-header-two__inner__bg-two" style={{ backgroundImage: `url(${bg.src})` }}></div>
                    <div className="main-header-two__logo">
                        <Link href='/'>
                            <Image
                                src={logo_light}
                                alt='Tolak HTML'
                                width={184}
                                style={{ height: "auto" }}
                            />
                        </Link>
                    </div>

                    <nav className="main-header-two__nav main-menu">
                        <ul className="main-menu__list one-page-scroll-menu">
                            {singleNavItemsTwo.map((item, index) => (
                                <SingleNavItems key={index} item={item} />
                            ))}

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
            </Container>
        </header>
    );
};

export default HeaderTwoSingleCloned;