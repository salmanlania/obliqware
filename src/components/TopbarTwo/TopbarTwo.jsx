'use client'
import headerData from '@/data/HeaderData';
import useTolakStretch from '@/hooks/useTolakSerch';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});


const { links, topbarTwoCarousel } = headerData

const TopbarTwo = () => {
    const [mounted, setMounted] = useState(false);

    const elementsRef = useTolakStretch([]);




    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const settings = {
        loop: true,
        mode: "gallery",
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        controls: false,
        gutter: 0,
        autoplayButtonOutput: false,


    }
    return (


        <div className="topbar-two">
            <Container >
                <Row >
                    <Col lg={7} >
                        <div ref={el => elementsRef.current[0] = el} className="tolak-stretch-element-inside-column">
                            <div className="topbar-two__left">
                                <div className="topbar-two__left__title">NEWS:</div>
                                <TinySlider className="topbar-two__carousel" settings={settings} >
                                    {
                                        topbarTwoCarousel.map(({ id, text }) => <div key={id} className="item">
                                            <p className="topbar-two__left__text">{text}</p>
                                        </div>)
                                    }
                                </TinySlider>

                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <ul className="topbar-two__links">
                            {
                                links.map(({ id, name, href }) => <li key={id}><Link href={href}>{name}</Link></li>)
                            }

                        </ul>
                    </Col>
                </Row>
            </Container >
        </div >

    );
};

export default TopbarTwo;