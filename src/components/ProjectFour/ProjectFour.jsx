'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';


const TinySlider = dynamic(() => import('tiny-slider-react'), { ssr: false });

import projectsFourData from '@/data/ProjectFour';
import Image from 'next/image';
import Link from 'next/link';

const { title, tagline, projects } = projectsFourData;
const ProjectFour = () => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);



    const settings = {
        items: 1,
        gutter: 30,
        loop: false,
        smartSpeed: 700,
        nav: false,
        mousDrag: true,
        controls: false,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1300: { items: 4 }
        }
    };
    if (!mounted) {
        return null;
    }
    return (
        <section className="project-four" id='project'>
            <Container>
                <div className="sec-title-three text-center">
                    <h6 className="sec-title-three__tagline">
                        <span className="sec-title-three__tagline__left-border"></span>
                        {tagline}
                        <span className="sec-title-three__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-three__title">{title}</h3>
                </div>
                <TinySlider settings={settings} className="project-four__carousel">
                    {projects.map(({ id, image, title, description, link }) => (
                        <div key={id} className="item">
                            <div className="project-four__item">
                                <div className="project-four__item__image">
                                    <Image src={image} alt="Project" />
                                </div>
                                <div className="project-four__item__content">
                                    <h3 className="project-four__item__title">
                                        <Link href={link}>{title}</Link>
                                    </h3>
                                    <p className="project-four__item__text">{description}</p>
                                    <Link href={link} className="project-four__item__rm">
                                        <span className="tolak-icons-two-arrow-right-short"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>
            </Container>
        </section>
    );
};

export default ProjectFour;
