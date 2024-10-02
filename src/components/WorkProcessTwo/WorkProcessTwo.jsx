import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Image from 'next/image';
import workProcessTwoData from '@/data/WorkProcssTwoData';

const WorkProcessTwo = () => {
    const { bgImage, tagLine, title, items } = workProcessTwoData;

    return (
        <section className="work-process-two" >
            <div className="work-process-two__shape" style={{ backgroundImage: `url(${bgImage.src})` }}></div>
            <Container>
                <div className="sec-title-four text-center">
                    <h6 className="sec-title-four__tagline">
                        <span className="sec-title-four__tagline__left-border"></span>
                        {tagLine}
                        <span className="sec-title-four__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-four__title">{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {items.map(({ id, reverse, title, text, image, delay }) => (
                        <Col key={id} xl={3} md={6}>
                            <div
                                className={`work-process-two__item ${reverse ? "work-process-two__item--reverse" : ""} text-center wow fadeInUp`} data-aos='fade-up'
                                data-aos-delay={delay}
                            // style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}
                            >
                                <div className="work-process-two__item__number"></div>
                                <h4 className="work-process-two__item__title">{title}</h4>
                                <p className="work-process-two__item__text">{text}</p>
                                <div className="work-process-two__item__thumb">
                                    <Image src={image} alt={title} />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default WorkProcessTwo;
