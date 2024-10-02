import featureSixData from '@/data/FeatureSixData';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const FeatureSix = () => {

    const { title, tagline, features } = featureSixData;

    return (
        <section className="featurer-six">
            <Container>
                <div className="sec-title-four text-center">
                    <h6 className="sec-title-four__tagline">
                        <span className="sec-title-four__tagline__left-border"></span>
                        {tagline}
                        <span className="sec-title-four__tagline__right-border"></span>
                    </h6>
                    <h3 className="sec-title-four__title">{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {features.map(({ id, backgroundImage, icon, title, delay }) => (
                        <Col key={id} lg={3} md={6} className="wow fadeInUp" data-aos="fade-up" data-aos-delay={delay}>
                            <div className="featurer-six__item">
                                <div className="featurer-six__item__hover" style={{ backgroundImage: `url(${backgroundImage.src})` }}></div>
                                <div className="featurer-six__item__icon">
                                    <span className={icon}></span>
                                </div>
                                <h4 className="featurer-six__item__title" > {title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeatureSix;
