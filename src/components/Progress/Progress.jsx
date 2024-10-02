'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';
// import styles from './progress.module.css';

const Progress = ({ percent }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (

        <div className="skill-two__progress__bar" ref={ref}>
            <div className={`skill-two__progress__inner count-bar ${inView ? "counted" : ''}`} style={{ width: inView ? `${percent}` : "0%" }}>
                <div className="skill-two__progress__number count-text">{percent}</div>
            </div>
        </div>


    );
};

export default Progress;