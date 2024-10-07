"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
// import AnimatedProgressBar from "@/components/AnimatedProgressBar";
import serviceDetailsData from "@/data/ServiceDetailsData";
import AnimatedProgressBar from "../AnimatedProgressBar/AnimatedProgressBar";
import { usePathname } from "next/navigation";

const ServiceDetails = () => {
    const pathname = usePathname()


    const data = serviceDetailsData.find((d) => d.id == pathname);


    const {
        // id,
        thumbnailImage,
        sidebar,
        content,
        skills,
        lists,
        solutionText,
        contentImage,
        secondlastText,
        lastText,
    } = data


    return (
        <section className="service-details">
            <Container>
                <Row className="gutter-y-30">
                    <Col md={12} xl={8}>
                        <div className="service-details__thumbnail">
                            <Image src={thumbnailImage} alt="Service Detail" />
                        </div>
                    </Col>
                    <Col md={12} xl={4}>
                        <div className="service-details__sidebar">
                            <h3 className="service-details__sidebar__title">
                                {sidebar.title}
                            </h3>
                            <ul className="list-unstyled service-details__sidebar__nav">
                                {sidebar.navItems.map(({ id, name, href }) => (
                                    <li className={`${pathname === href ? 'current' : ""}`} key={id}>
                                        <Link href={href}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className="service-details__content">
                    {content.map((paragraph, index) => (
                        <p key={index} className="service-details__text">
                            {paragraph}
                        </p>
                    ))}
                    <Row className="gutter-y-30">
                        <Col lg={6}>
                            <p className="service-details__text">
                                {solutionText}
                            </p>
                            <Row className="gutter-y-30">
                                {skills.map(({ id, title, text, percentage }) => (
                                    <Col md={6} key={id}>
                                        <AnimatedProgressBar
                                            progress={percentage}
                                            title={title}
                                            text={text}
                                            counterOn={true}
                                            service="service"
                                        />
                                    </Col>
                                ))}
                                {lists.map(({ id, items }) => (
                                    <Col md={6} key={id}>
                                        <ul className="list-unstyled service-details__list">
                                            {items.map((item, idx) => (
                                                <li key={idx}>
                                                    <i className="fas fa-check-circle"></i>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                ))}
                            </Row>
                            <p className="service-details__text">
                                <span></span> {solutionText}
                            </p>
                            <p className="service-details__text">
                                <span></span> {secondlastText}
                            </p>
                        </Col>
                        <Col lg={6}>
                            <div className="service-details__content__image">
                                <Image src={contentImage} alt="Service Content" />
                            </div>
                        </Col>
                    </Row>
                    <p className="service-details__text service-details__text--last">
                        {lastText}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ServiceDetails;
