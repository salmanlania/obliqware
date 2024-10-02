import slideTextData from '@/data/SlideTextData';
import React from 'react';
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});
import JarallaxImage from '../Jarallax/JarallaxImage';
import dynamic from 'next/dynamic';
const { bg, lists } = slideTextData

const SlideText = ({ pageTitle }) => {
    return (
        <section className={`slide-text ${pageTitle === "homeSix" ? "slide-text--home-six" : ""}`}>
            <Jarallax className="slide-text__bg" speed={0.2} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>


            <div className="slide-text__wrap">
                <ul className="slide-text__list list-unstyled">
                    {
                        lists.map((l, i) => <li key={i}>{l}</li>)
                    }

                </ul>
            </div>
        </section>
    );
};

export default SlideText;