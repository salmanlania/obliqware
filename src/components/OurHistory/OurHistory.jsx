import ourHistoryData from "@/data/OurHistoryData";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const { items, tagline, title } = ourHistoryData;

const OurHistory = () => {
  return (
    <section className='our-history'>
      <Container>
        <div className='sec-title-four text-center'>
          <h6 className='sec-title-four__tagline'>
            <span className='sec-title-four__tagline__left-border'></span>
            {tagline}
            <span className='sec-title-four__tagline__right-border'></span>
          </h6>
          <h3 className='sec-title-four__title'>{title}</h3>
        </div>

        <Row>
          {items.map((item) => (
            <Col
              lg={3}
              md={6}
              className='wow fadeInUp'
              data-aos='fade-up'
              data-aos-delay={`${(item.id - 1) * 100}ms`}
              key={item.id}
            >
              <div className='our-history__item'>
                <div className='our-history__item__top'>
                  <h3 className='our-history__item__number'>{item.number}</h3>
                  <p className='our-history__item__text'>{item.text}</p>
                </div>
                <h4 className='our-history__item__title'>{item.title}</h4>
                <span className='our-history__item__date'>{item.date}</span>
                <div className='our-history__item__year'>{item.year}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div className='our-history__border'></div>
      </Container>
    </section>
  );
};

export default OurHistory;
