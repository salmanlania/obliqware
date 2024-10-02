'use client'
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ScrollTriggerCount = ({ count }) => {
    const [trigger, setTrigger] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setTrigger(true)}
            onExit={() => setTrigger(false)}>
            {trigger &&
                // <CountUp className='count-text'
                //     end={count}
                //     duration={1.5} />
                <span>{count}</span>
            }
        </ScrollTrigger>
    );
};

export default ScrollTriggerCount;