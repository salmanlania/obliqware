'use client'
import aboutOneData from '@/data/AboutOneData';
import Image from 'next/image';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';
import useTolakStretch from '@/hooks/useTolakSerch';
const { arrow, arrowRtl, bg, elementImage, imageText, lists, shape, shapeRtl, tagLine, text, title, videoId } = aboutOneData

const AboutOne = ({ rtl }) => {
    const [isOpen, setOpen] = useState(false);

    const containerRef = useTolakStretch();

    // const tolakStretch = () => {
    //     const i = window.innerWidth;
    //     elementsRef.current.forEach(element => {
    //         const $this = element;
    //         const row = $this.closest('.row');
    //         const cols = $this.closest('[class^="col-"]');
    //         const colsHeight = cols ? cols.clientHeight : 0;
    //         const rect = $this.getBoundingClientRect();
    //         const l = row.getBoundingClientRect();
    //         const s = cols.getBoundingClientRect();
    //         const r = rect.left;
    //         const d = i - rect.right;
    //         const c = l.left + (parseFloat(getComputedStyle(row).paddingLeft) || 0);
    //         const u = i - l.right + (parseFloat(getComputedStyle(row).paddingRight) || 0);
    //         const p = s.left;
    //         const f = i - s.right;
    //         const styles = {
    //             marginLeft: 0,
    //             marginRight: 0
    //         };
    //         if (Math.round(c) === Math.round(p)) {
    //             const h = parseFloat(getComputedStyle($this).marginLeft || 0);
    //             styles.marginLeft = `${h - r}px`;
    //         }
    //         if (Math.round(u) === Math.round(f)) {
    //             const w = parseFloat(getComputedStyle($this).marginRight || 0);
    //             styles.marginRight = `${w - d}px`;
    //         }
    //         Object.assign($this.style, styles);
    //     });
    // };

    // useEffect(() => {

    //     tolakStretch();
    //     window.addEventListener('resize', tolakStretch);
    //     return () => {
    //         window.removeEventListener('resize', tolakStretch);
    //     };
    // }, []);

    return (
        <>
            <section className="about-one" id='about'>
                <div className="about-one__bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
                <div className="about-one__shape" style={{ backgroundImage: `url(${rtl ? shapeRtl.src : shape.src})` }}></div>
                <Container >
                    <Row >
                        <Col xl={6} data-aos='fade-right'
                            data-aos-easing='linear'
                            data-aos-duration='300' >
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                                    <h3 className="sec-title__title">{title.split("\n").map((t, i) => (
                                        <Fragment key={i}>
                                            {t} <br />
                                        </Fragment>
                                    ))}</h3>
                                </div>
                                <p className="about-one__content__text">{text.split("\n").map((t, i) => (
                                    <Fragment key={i}>
                                        {t} <br />
                                    </Fragment>
                                ))}

                                </p>
                                <ul className="about-one__content__list">
                                    {lists.map((list, index) => <li key={index}><span className="icofont-checked"></span>
                                        <p>{list}</p>
                                    </li>)}

                                </ul>
                                <div className="clearfix"></div>
                                <div className="about-one__content__btn">
                                    <Link href="about" className="tolak-btn"><b>About More</b><span></span></Link>
                                    <h5 className="about-one__content__btn__text">Watching video</h5>
                                    <Image className="about-one__content__btn__arrow" src={rtl ? arrowRtl : arrow} alt="tolak" />
                                </div>
                                <div className="about-one__video-btn">
                                    <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)} className="video-popup">
                                        <i className="fa fa-play"></i>
                                        <span className="video-popup__btn-ripple"></span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} >
                            <div ref={el => containerRef.current[0] = el} className="tolak-stretch-element-inside-column">
                                <div className="about-one__image" data-aos={`${rtl ? 'slide-right' : 'slide-left'}`}
                                    data-aos-easing='linear'
                                    data-aos-duration='1500'>
                                    <Image src={elementImage} alt="tolak" />
                                    <div className="about-one__image__text">
                                        <span></span>{imageText}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
        </>
    );
};

export default AboutOne;