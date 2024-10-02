'use client'
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import ctaTenData from "@/data/CtaTenData";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CtaTen = () => {
    const { progress, content, button } = ctaTenData;
    const [countStart, setCountStart] = useState(false);


    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setCountStart(true);
        }
    };

    if (!progress || !content || !button) {
        return null;
    }

    return (
        <section className="cta-ten">
            <Container>
                <Row>
                    <Col lg={2} className="wow fadeInUp" data-wow-delay="00ms">
                        <div className="progress-box">
                            <VisibilitySensor
                                offset={{ top: 10 }}
                                delayedCall={true}
                                onChange={onVisibilityChange}
                            >
                                {({ isVisible }) => (
                                    <div className="graph-outer">
                                        <CircularProgressbar
                                            value={countStart ? progress.value : 0}
                                            styles={{
                                                path: { stroke: progress.fgColor },
                                                trail: { stroke: progress.bgColor },
                                            }}
                                            strokeWidth={8}
                                            className="dial"
                                        />
                                        <div className="inner-text count-box">
                                            <span className="count-text">
                                                <CountUp
                                                    start={0}
                                                    end={isVisible ? progress.value : 0}
                                                    duration={1}
                                                />
                                            </span>
                                            <span className="count-Parsent">{progress.countPercent}</span>
                                        </div>
                                    </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </Col>
                    <Col lg={7} className="wow fadeInUp" data-wow-delay="100ms">
                        <div className="cta-ten__content">
                            <h2
                                className="cta-ten__content__title"
                                dangerouslySetInnerHTML={{ __html: content.title }}
                            ></h2>
                            <div className="cta-ten__box">
                                <div className="cta-ten__box__icon">
                                    <span className={content.box.icon}></span>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: content.box.text }}></div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        lg={3}
                        className="d-flex align-items-center justify-content-end wow fadeInUp"
                        data-wow-delay="200ms"
                    >
                        <Link href={button.href} className="tolak-btn-two tolak-btn-two--home-seven">
                            <span className="tolak-btn-two__left-star"></span>
                            <span>
                                {button.text}
                                <i className={button.icon}></i>
                            </span>
                            <span className="tolak-btn-two__right-star"></span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaTen;
