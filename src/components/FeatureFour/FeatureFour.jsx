"use client";
import featureFourData from "@/data/FeatureFour";
import useTolakStretch from "@/hooks/useTolakSerch";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

const FeatureFour = () => {
  const elementsRef = useTolakStretch();


  return (
    <section className='feature-four'>
      <Container>
        <Row>
          <Col xl={4}></Col>
          <Col xl={8}>
            <div
              ref={(el) => (elementsRef.current[0] = el)}
              className='tolak-stretch-element-inside-column'
            >
              {featureFourData.map(({ id, icon, title }) => (
                <div
                  key={id}
                  className='feature-four__item wow fadeInUp' data-aos="fade-up"
                  data-aos-delay='00ms'
                >
                  <div className='feature-four__item__icon'>
                    <span className={icon}></span>
                  </div>
                  <h4 className='feature-four__item__title'>{title}</h4>
                </div>
              ))}

              <Link href='contact' className='tolak-btn'>
                <b>Contact Now</b>
                <span></span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureFour;
