import featureOneData from '@/data/FeatureOneData';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const { tagLine, title, items } = featureOneData

const FeatureOne = () => {
    return (
        <section className="feature-one">
            <div className="feature-one__bg"></div>
            <Container >
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                    <h3 className="sec-title__title">{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {
                        items.map(({ id,
                            icon,
                            title,
                            text,
                            shape }) => <Col key={id} md={6} xl={3}>
                                <div className="feature-one__item text-center">
                                    <div className="feature-one__item__number"></div>
                                    <div className="feature-one__item__icon">
                                        <span className={icon}></span>
                                    </div>
                                    <h4 className="feature-one__item__title">{title}</h4>
                                    <p className="feature-one__item__text">{text}</p>
                                    {
                                        shape && <div className="feature-one__item__arrow" style={{ backgroundImage: `url(${shape.src})` }}></div>
                                    }

                                </div>
                            </Col>)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default FeatureOne;