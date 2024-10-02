import solutionData from '@/data/SolutionData';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { bg,
    bgDark,
    image,
    image2,
    shape,
    tagLine,
    title,
    text,
    boxIcon,
    boxText,
    listTitle,
    lists } = solutionData

const OurSolution = ({ Two, dark }) => {
    return (
        <section className="our-solution" style={{ backgroundImage: `url(${dark ? bgDark.src : bg.src})` }}>
            <Container>
                <Row >
                    <Col lg={6}>
                        <div className="our-solution__image">
                            <div className="our-solution__border-one"></div>
                            <div className="our-solution__border-two"></div>
                            <Image src={Two ? image2 : image} alt="tolak" />
                            <div className="our-solution__border-three"></div>
                            <div className="our-solution__image__shape"><Image src={shape} alt="tolak" /></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="our-solution__content">
                            <div className="sec-title text-left">
                                <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                                <h3 className="sec-title__title">{title}</h3>
                            </div>
                            <p className="our-solution__content__text">
                                {text}
                            </p>
                            <Row >
                                <Col md={4} lg={5} xl={4} >
                                    <div className="our-solution__box">
                                        <div className="our-solution__box__icon"><span className={boxIcon}></span></div>
                                        <p className="our-solution__box__text">
                                            {boxText}
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6} lg={7} xl={6} >
                                    <div className="our-solution__list">
                                        <h5 className="our-solution__list__title">{listTitle}</h5>
                                        <ul>
                                            {lists.map(({ id, list }) => <li key={id}><span className="fas fa-check-circle"></span>{list}</li>)}

                                        </ul>
                                        <div className="our-solution__list__border"></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default OurSolution;