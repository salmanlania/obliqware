'use client'
import { useInView } from 'react-intersection-observer';
const TeamProgressBar = ({ title, percent }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (

        <div className="team-details__progress">
            <p className="team-details__progress__title">{title}</p>
            <div className="team-details__progress__bar" ref={ref}>
                <div
                    className="team-details__progress__inner"
                    style={{ width: inView ? percent : '0%' }}
                ></div>
                <div className="team-details__progress__number">{percent}</div>
            </div>
        </div>

    );
};

export default TeamProgressBar;