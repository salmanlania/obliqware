import featureTwoData from '@/data/FeatureTwoData';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FeatureTwo = () => {
    return (
        <section className="feature-two">
            <Container >
                <Row className="gutter-y-30">
                    {
                        featureTwoData.map(({ id, icon, title, text, identity }) => <Col key={id} md={6} lg={4} >
                            <div className={`feature-two__item text-center ${identity} wow fadeInUp`} data-aos="fade-up" data-aos-delay="100">
                                <div className="feature-two__item__icon">
                                    <span className={icon}></span>
                                </div>
                                <h4 className="feature-two__item__title">{title}</h4>
                                <p className="feature-two__item__text">{text}</p>
                            </div>
                        </Col>)
                    }

                </Row>
            </Container>
        </section >
    );
};

export default FeatureTwo;