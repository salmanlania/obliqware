"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Tilt } from "react-tilt";
import projectDetailsFaqData from "@/data/ProjectDetailsFaq";

const { counter, accordionData, image } = projectDetailsFaqData;

const ProjectDetailsFaq = () => {
  const [counterOn, setCounterOn] = useState(false);
  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };
  return (
    <section className='project-details-faq'>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col lg={6}>
            <div
              className='project-details-faq__accordion tolak-accrodion'
              data-grp-name='tolak-accrodion'
            >
              <Accordion defaultActiveKey='1'>
                {accordionData.map((accordion, index) => (
                  <Accordion.Item
                    key={accordion.id}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header>
                      <i className='fa fa-check-circle'></i>
                      {accordion.title}
                      <span className='accrodion-title__icon'></span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='inner'>
                        <p>{accordion.content}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
          <Col lg={6}>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className='project-details-faq__image'>
                <Image src={image} alt='tolak' />

                <Tilt
                  className='project-details-faq__item count-box '
                  options={defaultOptions}
                >
                  <h3 className='project-details-faq__item__count'>
                    {counterOn && (
                      <CountUp
                        className='count-text'
                        end={counter.count}
                        duration={1.5}
                      />
                    )}
                    {counter.label}
                  </h3>
                  <p className='project-details-faq__item__text'>
                    {counter.text}
                  </p>
                </Tilt>
              </div>
            </ScrollTrigger>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsFaq;
