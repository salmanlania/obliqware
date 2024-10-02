import testimonialsOnePageData from '@/data/TestimonialsOnePageDtata';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { bg, tagLine, title, items } = testimonialsOnePageData

const TestimonialsOnePage = () => {
    return (
        <section className="testimonials-one testimonials-one--page">
            <Container >
                <div className="sec-title-two text-center">
                    <h6 className="sec-title-two__tagline"><span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>{tagLine}<span className="sec-title-two__tagline__right icofont-rounded-double-right"></span></h6>
                    <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <Row className=" gutter-y-30">
                    {items.map(({ id, icon, image, content, name, designation, rating }) =>
                        <Col key={id} lg={4} md={6} >
                            <div className="testimonials-card">
                                <div className="testimonials-card__bg"></div>
                                <div className="testimonials-card__bg-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371 430">
                                        <path d="m81 0h210c44.2 0 80 35.8 80 80v280c0 0-69.4 70-148.1 70-28.2 0-57.5 0-85.3 0-73.8 0-136.6-70-136.6-70v-280c0-44.2 35.8-80 80-80z" />
                                    </svg>
                                </div>
                                <div className="testimonials-card__quote"><i className={icon}></i></div>
                                <div className="testimonials-card__content">
                                    {content}
                                </div>
                                <h3 className="testimonials-card__name">
                                    {name}
                                </h3>
                                <p className="testimonials-card__designation">{designation}</p>
                                <div className="testimonials-card__rating">
                                    {
                                        rating.map((c, i) => <i key={i} className={c}></i>)
                                    }
                                </div>
                                <div className="testimonials-card__image">
                                    <Image src={image} alt={name} />
                                </div>
                            </div>
                        </Col>)}

                </Row>
            </Container>
        </section >
    );
};

export default TestimonialsOnePage;