
import Layout from '@/components/Layout/Layout';
import React from 'react';
import MainSliderFive from '@/components/MainSliderFive/MainSliderFive';
import FeatureFive from '@/components/FeatureFive/FeatureFive';
import MailTwo from '@/components/MailTwo/MailTwo';
import AboutFive from '@/components/AboutFive/AboutFive';
import FunFactThree from '@/components/FunfactThree/FunFactThree';
import ServiceThree from '@/components/ServiceThree/ServiceThree';
import SkillTwo from '@/components/SkillTwo/SkillTwo';
import ProjectThree from '@/components/ProjectThree/ProjectThree';
import TeamThree from '@/components/TeamThree/TeamThree';
import FaqTwo from '@/components/FaqTwo/FaqTwo';
import VideoThree from '@/components/VideoThree/VideoThree';
import TestimonialsFour from '@/components/TestimonialsFour/TestimonialsFour';
import WhyChooseThree from '@/components/WhyChooseThree/WhyChooseThree';
import CtaSeven from '@/components/CtaSeven/CtaSeven';
import BlogFour from '@/components/BlogFour/BlogFour';
import TopbarFive from '@/components/TopbarFive/TopbarFive';
import HeaderFive from '@/components/HeaderFive/HeaderFive';
import FooterFive from '@/components/FooterFive/FooterFive';
import ClientCarousel from '@/components/ClientCarousel/ClientCarousel';
import HeaderFiveCloned from '@/components/HeaderFive/HeaderFiveCloned';

export const metadata = {
    title: "Home Five || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};


const page = () => {
    return (
        <Layout pageTitle="homeFive">
            <TopbarFive />
            <HeaderFive />
            <HeaderFiveCloned />
            <MainSliderFive />
            <FeatureFive />
            <AboutFive />
            <FunFactThree />
            <ServiceThree />
            <SkillTwo />
            <ClientCarousel pageTitle="homeFive" />
            <ProjectThree />
            <TeamThree />
            <FaqTwo />
            <VideoThree />
            <TestimonialsFour />
            <WhyChooseThree />
            <CtaSeven />
            <BlogFour />
            <MailTwo pageTitle="homeFive" />
            <FooterFive />
        </Layout>
    );
};

export default page;