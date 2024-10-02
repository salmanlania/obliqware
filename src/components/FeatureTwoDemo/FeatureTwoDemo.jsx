import { featuresTwoDemoData } from '@/data/FeatureTwoDemo';
import Image from 'next/image';
import React, { Fragment } from 'react';

const FeatureTwoDemo = () => {
    return (
        <section className="features-two">
            <div className="container">
                <div className="row">
                    {featuresTwoDemoData.map(({ id, title, image, alt }) => (
                        <div className="col-md-6 col-lg-3" key={id}>
                            <div className="features-two__box">
                                <Image src={image} width={64} height={52} alt={alt} />
                                <h2 className="features-two__title" >{title.split('\n').map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureTwoDemo;