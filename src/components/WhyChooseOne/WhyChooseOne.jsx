import whyChooseOneData from "@/data/WhyChooseOneData";
import Image from "next/image";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
const { bg, image, items, text, title, tagLine } = whyChooseOneData;

const WhyChooseOne = () => {
  return (
    <section
      className='why-choose-one'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col xl={8}>
            <div className='why-choose-one__content'>
              <div className='sec-title-two text-left'>
                <h6 className='sec-title-two__tagline'>
                  <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                  {tagLine}
                  <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                </h6>
                <h3 className='sec-title-two__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h3>
              </div>
              <p className='why-choose-one__content__text'>
                {text.split("\n").map((t, i) => (
                  <Fragment key={i}>
                    {t} <br />
                  </Fragment>
                ))}
              </p>
              <div className='row gutter-y-30'>
                {items.map(({ id, icon, title }) => (
                  <Col key={id} md={6}>
                    <div
                      className='why-choose-one__item wow fadeInUp' data-aos='fade-up'
                      data-aos-delay='00ms'
                    >
                      <div className='why-choose-one__item__icon'>
                        <span className={icon}></span>
                      </div>
                      <h4 className='why-choose-one__item__title'>{title}</h4>
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <div
              className='why-choose-one__image wow slideInRight' data-aos='fade-left'
              data-aos-delay='100'
            >
              <Image src={image} alt='tolak' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseOne;
