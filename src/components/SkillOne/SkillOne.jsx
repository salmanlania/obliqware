"use client";
import Image from "next/image";

import React, { useState } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import skillOneData from "@/data/SkillOneData";
import AnimatedProgressBar from "../AnimatedProgressBar/AnimatedProgressBar";
import ScrollTrigger from "react-scroll-trigger";
const {
  contents,
  href,
  image,
  imgText,
  lists,
  shape,
  tagLine,
  text,
  title,
  contImage,
} = skillOneData;

const SkillOne = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className='skill-one'>
      <Container>
        <Row>
          <Col lg={6} className='wow fadeInUp' data-aos='fade-up' data-aos-delay='100'>
            <div className='skill-one__content'>
              <div className='sec-title-two text-left'>
                <h6 className='sec-title-two__tagline'>
                  <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                  {tagLine}
                  <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                </h6>
                <h3 className='sec-title-two__title'>{title}</h3>
              </div>
              <p className='skill-one__content__text'>{text}</p>
              <div className='skill-one__content__bar'></div>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <Row>
                  <Col md={5}>
                    <div className='skill-one__content__image'>
                      <Image src={contImage} alt='tolak' />
                    </div>
                  </Col>

                  <Col md={7}>
                    {contents.map(({ id, progress, text, title }) => (
                      <AnimatedProgressBar
                        key={id}
                        progress={progress}
                        title={title}
                        text={text}
                        counterOn={counterOn}
                      />
                      // <div key={id} className='skill-one__content__skill'>
                      //   <div className='progress-box'>
                      //     <div style={{ width: 60, height: 60 }}>

                      //       {/* <CircularProgressbar
                      //         value={progress}
                      //         text={`${progress}%`}
                      //         styles={buildStyles({
                      //           // Text size
                      //           textSize: "30px",

                      //           // How long animation takes to go from one percentage to another, in seconds
                      //           pathTransitionDuration: 0.5,

                      //           // Can specify path transition in more detail, or remove it entirely
                      //           // pathTransition: 'none',

                      //           // Colors
                      //           pathColor: "#3d72fc",
                      //           textColor: "#39484a",
                      //           backgroundColor: "#c8c8c8",
                      //         })}
                      //       /> */}
                      //     </div>
                      //     {/* <div className="graph-outer">
                      //                 <input type="text" className="dial" data-fgColor="#3d72fc" data-bgColor="#c8c8c8" data-width="60" data-height="60" data-linecap="normal" value="45">
                      //                 <div className="inner-text count-box">
                      //                     <span className="count-text" data-stop="45" data-speed="2000"></span><span className="count-Parsent">%</span>
                      //                 </div>
                      //             </div> */}
                      //   </div>
                      //   <h5 className='skill-one__content__skill__title'>
                      //     {title}
                      //   </h5>
                      //   <p className='skill-one__content__skill__text'>{text}</p>
                      // </div>
                    ))}
                    {/* <div className="skill-one__content__skill">
                              <div className="progress-box">
                                  <div className="graph-outer">
                                      <input type="text" className="dial" data-fgColor="#3d72fc" data-bgColor="#c8c8c8" data-width="60" data-height="60" data-linecap="normal" value="45">
                                      <div className="inner-text count-box">
                                          <span className="count-text" data-stop="45" data-speed="2000"></span><span className="count-Parsent">%</span>
                                      </div>
                                  </div>
                              </div>
                              <h5 className="skill-one__content__skill__title">Solution Business</h5>
                              <p className="skill-one__content__skill__text">Level is high</p>
                          </div>
                          <div className="skill-one__content__skill">
                              <div className="progress-box">
                                  <div className="graph-outer">
                                      <input type="text" className="dial" data-fgColor="#3d72fc" data-bgColor="#c8c8c8" data-width="60" data-height="60" data-linecap="normal" value="85">
                                      <div className="inner-text count-box">
                                          <span className="count-text" data-stop="85" data-speed="2000"></span><span className="count-Parsent">%</span>
                                      </div>
                                  </div>
                              </div>
                              <h5 className="skill-one__content__skill__title">Good Feedback</h5>
                              <p className="skill-one__content__skill__text">Don’t worry</p>
                          </div> */}
                  </Col>
                </Row>
              </ScrollTrigger>
              <ul className='skill-one__content__list'>
                {lists.map((list, i) => (
                  <li key={i}>
                    <span className='icofont-checked'></span>
                    <p>{list}</p>
                  </li>
                ))}
                {/* <li><span className="icofont-checked"></span>
                          <p>Business onstructivism solution best this service.</p>
                      </li>
                      <li><span className="icofont-checked"></span>
                          <p>We give management projects compny.</p>
                      </li> */}
              </ul>
              <Link href={href} className='tolak-btn'>
                <b>Skill More</b>
                <span></span>
              </Link>
            </div>
          </Col>
          <Col lg={6} className='wow fadeInRight' data-aos='fade-left' data-aos-delay='00ms'>
            <div className='skill-one__image'>
              <Image src={image} alt='tolak' />
              <Image
                className='skill-one__image__shape'
                src={shape}
                alt='tolak'
              />
              <div
                className='skill-one__image__text wow fadeInUp' data-aos='fade-up'
                data-aos-delay='200'
              >
                <span>Appropriately :</span> {imgText}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillOne;
