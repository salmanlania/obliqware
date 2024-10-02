'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projectThreeData from '@/data/ProjectThreeData';
import Image from 'next/image';
import Link from 'next/link';

// Dynamically import TinySlider component
const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });

const ProjectThree = () => {
    const { tagLine, title, carouselData } = projectThreeData;

    // Tiny Slider settings
    const settings = {
        items: 1,
        gutter: 30,
        loop: false,
        smartSpeed: 700,
        nav: true,
        mouseDrag: true,
        controls: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
        <section className="project-three" id="project">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="sec-title-three text-left">
                            <h6 className="sec-title-three__tagline">
                                <span className="sec-title-three__tagline__left-border"></span>
                                {tagLine}
                                <span className="sec-title-three__tagline__right-border"></span>
                            </h6>
                            <h3 className="sec-title-three__title">
                                {title}
                            </h3>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="project-three__btn">
                            <Button href="project.html" className="tolak-btn-two">
                                <span className="tolak-btn-two__left-star"></span>
                                <span>All Projects<i className="tolak-icons-two-arrow-right-short"></i></span>
                                <span className="tolak-btn-two__right-star"></span>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tolak-carousel--basic-nav">
                            <TinySlider settings={settings} className="project-three__carousel">
                                {carouselData.map(({ id, image, href, cats, catsHref, title }) => (
                                    <div key={id} className="item">
                                        <div className="project-three__item">
                                            <div className="project-three__item__image">
                                                <Image src={image} alt={title} />
                                                <div className="project-three__item__cats">
                                                    <Link href={catsHref}>{cats}</Link>
                                                </div>
                                            </div>
                                            <div className="project-three__item__content">
                                                <div className="project-three__item__number"></div>
                                                <h3 className="project-three__item__title">
                                                    <Link href={href}>{title}</Link>
                                                </h3>
                                                <Link href={href} className="project-three__item__rm">
                                                    <span className="tolak-icons-two-arrow-right-short"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProjectThree;
