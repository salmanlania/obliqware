"use client";
import mailTwoData from "@/data/MailTwoData";
import React from "react";
import SidebarNewsletter from "../SidebarNewsletter/SidebarNewsletter";
import { Col, Container, Row } from "react-bootstrap";
const { bg, icon, title, titleFive } = mailTwoData;
const MailTwo = ({ pageTitle }) => {
  return (
    <section
      className={`mail-section-two ${
        pageTitle === "homeFive" ? "mail-section-two--home-five" : ""
      }`}
    >
      <Container>
        <div className='mail-section-two__wrapper'>
          {pageTitle === "homeFive" ? null : (
            <div
              className='mail-section-two__bg'
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          )}

          <Row>
            <Col md={6}>
              <div className='mail-section-two__content'>
                <div className='mail-section-two__content__icon'>
                  <i className={icon}></i>
                </div>
                <h3 className='mail-section-two__content__title'>
                  {pageTitle === "homeFive" ? titleFive : title}
                </h3>
              </div>
            </Col>
            <Col md={6}>
              <SidebarNewsletter mail='two' />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MailTwo;
