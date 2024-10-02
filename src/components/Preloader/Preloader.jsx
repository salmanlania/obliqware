'use client'
import React, { useEffect, useState } from 'react';
import bg from '@/assets/images/loader.png'

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div className="preloader" style={{
            display: loading ? '' : 'none',

        }}>
            <div className="preloader__image" style={{ backgroundImage: `url(${bg.src})` }}></div>
        </div >
    );
};

export default Preloader;