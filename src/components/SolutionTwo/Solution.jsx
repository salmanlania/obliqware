import solutionTwoData from "@/data/SolutionTwoData";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const { bg, boxes, tagline, title, image } = solutionTwoData;
const SolutionTwo = () => {
  return (
    <section className='solution-two'>
      <div
        className='solution-two__bg'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className='sec-title-four text-center'>
          <h6 className='sec-title-four__tagline'>
            <span className='sec-title-four__tagline__left-border'></span>
            {tagline}
            <span className='sec-title-four__tagline__right-border'></span>
          </h6>
          <h3 className='sec-title-four__title'>{title}</h3>
        </div>

        <Row className='gutter-y-30'>
          <Col lg={4} md={6} className='wow fadeInUp' data-aos='fade-up' data-aos-delay='00ms'>
            {boxes.slice(0, 2).map((box) => (
              <div className='solution-two__box' key={box.id}>
                <h3 className='solution-two__box__title'>
                  <i className={box.icon}></i> {box.title}
                </h3>
                <p className='solution-two__box__text'>{box.text}</p>
                <a className='solution-two__box__rm' href={box.link}>
                  <span className='tolak-icons-two-arrow-right-short'></span>
                </a>
              </div>
            ))}
          </Col>

          <Col lg={4} md={6} className='wow fadeInUp' data-aos='fade-up' data-aos-delay='200'>
            <div className='solution-two__image'>
              <Image src={image} alt='Solution' />
            </div>
          </Col>


          <Col lg={4} md={6} className='wow fadeInUp' data-aos='fade-up' data-aos-delay='00ms'>
            {boxes.slice(2, 4).map((box) => (
              <div className='solution-two__box' key={box.id}>
                <h3 className='solution-two__box__title'>
                  <i className={box.icon}></i> {box.title}
                </h3>
                <p className='solution-two__box__text'>{box.text}</p>
                <a className='solution-two__box__rm' href={box.link}>
                  <span className='tolak-icons-two-arrow-right-short'></span>
                </a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SolutionTwo;
