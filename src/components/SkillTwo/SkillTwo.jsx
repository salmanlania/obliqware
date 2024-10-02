'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import skillTwoData from '@/data/SkillTwoData'; // Adjust the import path as necessary
import Image from 'next/image';
import Progress from '../Progress/Progress';

// Register necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const SkillTwo = () => {
    const { bg, skillImage, tagLine, title, text, progress, listItems, button } = skillTwoData;

    // Chart data
    const chartData = {
        labels: ["Python", "Java", "PHP", "JavaScript", "WordPress", "Others"],
        datasets: [{
            data: [45.5, 8.4, 13.6, 4.2, 24.0, 4.3],
            backgroundColor: ['#36A2EB', '#FF6384', '#FF5733', '#FFCE56', '#DAF7A6', '#C70039'],
            borderWidth: 2,
        }],
    };

    // Chart options
    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
        borderWidth: 2,
        borderRadius: 2,
        hoverBorderWidth: 0,
    };

    return (
        <section className="skill-two" style={{ backgroundImage: `url(${bg.src})` }}>
            <Container>
                <Row>
                    <Col lg={6} className="wow fadeInLeft" data-aos='fade-right'>
                        <div className="skill-two__content">
                            <div className="sec-title-three text-left">
                                <h6 className="sec-title-three__tagline">
                                    <span className="sec-title-three__tagline__left-border"></span>
                                    {tagLine}
                                    <span className="sec-title-three__tagline__right-border"></span>
                                </h6>
                                <h3 className="sec-title-three__title">
                                    {title}
                                </h3>
                            </div>
                            <p className="skill-two__content__text">
                                {text}
                            </p>
                            {progress.map((item, index) => (
                                <div key={index} className="skill-two__progress">
                                    <p className="skill-two__progress__title">{item.title}</p>
                                    {/* <div className="skill-two__progress__bar">
                                        <div className="skill-two__progress__inner count-bar" data-percent={item.percent}>
                                            <div className="skill-two__progress__number count-text">{item.percent}</div>
                                        </div>
                                    </div> */}
                                    <Progress percent={item.percent} />
                                </div>
                            ))}
                            <ul className="skill-two__list">
                                {listItems.map((item, index) => (
                                    <li key={index}>
                                        <i className="tolak-icons-two-badge-check"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={button.href} className="tolak-btn-two">
                                <span className="tolak-btn-two__left-star"></span>
                                <span>{button.text}<i className={button.icon}></i></span>
                                <span className="tolak-btn-two__right-star"></span>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInRight" data-aos='fade-left'>
                        <div className="skill-two__right">
                            <div className="skill-two__image">
                                <Image src={skillImage} alt="Skill Section" />
                            </div>
                            <div className="chart-container wow fadeInUp" data-aos='fade-up' data-aos-delay="200">
                                <Doughnut data={chartData} options={chartOptions} className="skill-two__chart" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SkillTwo;
