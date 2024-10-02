import React, { Fragment } from 'react';
import Image from 'next/image';
import { featureOneDemoData } from '@/data/FeatureOneDemoData';


const FeatureOneDemo = () => {

    return (
        <section className="features-one">
            <div className="container">
                <h2 className="features-one__title">Amazing Features</h2>
                <div className="features-one__grid">
                    {featureOneDemoData.slice(2).map((feature) => (
                        <div key={feature.id} className="features-one__box">
                            <div className="features-one__box__image">
                                <Image
                                    width={121}
                                    height={121}
                                    src={feature.image}
                                    alt={feature.title}
                                />
                            </div>
                            <h3 className="features-one__box__title">
                                {feature.title.split("\n").map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureOneDemo;
