import featureFiveData from '@/data/FeatureFiveData';
import React from 'react';


const FeatureFive = () => {
    return (
        <section className="featurer-five">
            <div className="container">
                <ul className="featurer-five__wrapper">

                    {
                        featureFiveData.map(({ id, bg, icon, title, text, active }) => <li key={id} className={`featurer-five__item ${active ? "featurer-five__item--active" : ""} wow fadeInUp`} data-aos="fade-up" data-aos-delay="00ms">
                            <div className="featurer-five__item__hover" style={{ backgroundImage: `url(${bg.src})` }}></div>
                            <div className="featurer-five__item__icon">
                                <span className={icon}></span>
                            </div>
                            <div className="featurer-five__item__number"></div>
                            <h4 className="featurer-five__item__title">{title}</h4>
                            <p className="featurer-five__item__text">{text}</p>
                        </li>)
                    }

                </ul>
            </div>
        </section>
    );
};

export default FeatureFive;