import projectDetailsData from "@/data/ProjectDetailsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const ProjectDetails = () => {
  const {
    mainImage,
    details,
    paragraphs,
    additionalImage,
    customerSection,
    finalParagraph,
  } = projectDetailsData;

  return (
    <section className='project-details'>
      <Container>
        <div className='project-details__image'>
          <Image src={mainImage} alt='Project' />
        </div>
        <div className='project-details__inner'>
          <Row className='align-items-center'>
            <Col xl={9} lg={8} md={7}>
              <div className='project-details__content'>
                <h4 className='project-details__content__title'>
                  {details.title}
                </h4>
                <p className='project-details__content__text'>
                  {details.description}
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={5}>
              <ul className='project-details__list'>
                {details.infoList.map((item, index) => (
                  <li key={index}>
                    <i className={item.icon}></i> <span>{item.label} :</span>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='project-details__text'>
            {paragraph}
          </p>
        ))}
        <Row className='project-details__customer-wrapper'>
          <Col lg={6}>
            <div className='project-details__image-two'>
              <Image src={additionalImage} alt='Additional' fluid />
            </div>
          </Col>
          <Col lg={6}>
            <div className='project-details__customer'>
              <div className='project-details__customer__box'>
                <div className='project-details__customer__box__icon'>
                  <span className='icon-best-price'></span>
                </div>
                <h3 className='project-details__customer__box__title'>
                  {customerSection.solutionTitle}
                </h3>
                <p className='project-details__customer__box__text'>
                  {customerSection.solutionText}
                </p>
              </div>
              <div className='project-details__customer__author'>
                {customerSection.authorImages.map((img, index) => (
                  <Image key={index} src={img} alt='Author' className='' />
                ))}
                <Link
                  variant='link'
                  href={customerSection.moreLink.href}
                  className='project-details__customer__author__rm'
                >
                  {customerSection.moreLink.text}{" "}
                  <span className={customerSection.moreLink.icon}></span>
                </Link>
              </div>
              <p className='project-details__customer__text'>
                {customerSection.customerText}
                <a href={customerSection.customerLink.href}>
                  ({customerSection.customerLink.text})
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <p className='project-details__text mt-4'>{finalParagraph}</p>
      </Container>
    </section>
  );
};

export default ProjectDetails;
