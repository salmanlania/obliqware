"use client";


import funFactOneData from "@/data/FunFactOne";
import Image from "next/image";
import React, { useEffect, useState } from "react";


import { Accordion, Container, Row, Col } from "react-bootstrap";

import { Tilt } from "react-tilt";

import ScrollTriggerCount from "../ScrollTrigger/ScrollTriggerCount";


const { accordionData, image, items, shape, shapeRtl } = funFactOneData;
const FunFactOne = ({ rtl }) => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  const defaultOptions = {
    maxTilt: 9,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };


  if (!mounted) {
    return null;
  }

  return (
    <section className='funfact-one'>
      <Container>
        <Row>
          <Col lg={6}>

            <div className='funfact-one__image'>
              <Image src={image} alt='tolak' />
              <Image
                className='funfact-one__image__shape'
                src={rtl ? shapeRtl : shape}
                alt='tolak'
              />

              {items.map(({ id, text, count, identity }) => (
                <Tilt
                  key={id}
                  className={`funfact-one__item count-box tolak-tilt ${identity}`}
                  options={defaultOptions}
                >
                  <h3 className='funfact-one__item__count '>

                    <ScrollTriggerCount count={count} />

                    k+
                  </h3>
                  <p className='funfact-one__item__text'>{text}</p>
                </Tilt>
              ))}
            </div>



          </Col>
          <Col lg={6}>
            <div className='funfact-one__accordion tolak-accrodion'>
              <Accordion defaultActiveKey='1'>
                {accordionData.map((accordion, index) => (
                  <Accordion.Item
                    key={accordion.id}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header>
                      <i className='fa fa-check-circle'></i>
                      {accordion.header}
                      <span className='accrodion-title__icon'></span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='inner'>
                        <p>
                          There are many variations of passages of is psum
                          available, but the majority have suffered alteration
                          in some we form, by injected humour,
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>


          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default FunFactOne;
