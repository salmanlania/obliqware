
import AboutThree from '@/components/AboutThree/AboutThree';
import CtaOne from '@/components/CtaOne/CtaOne';
import FaqOne from '@/components/FaqOne/FaqOne';
import FooterThree from '@/components/FooterThree/FooterThree';
import FunFactTwo from '@/components/FunFactTwo/FunFactTwo';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceTwo from '@/components/ServiceTwo/ServiceTwo';
import TeamOne from '@/components/TeamOne/TeamOne';
import TestimonialsTwo from '@/components/TestimonialsTwo/TestimonialsTwo';
import React from 'react';

export const metadata = {
    title: "About || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="About Page" subTitle="About" />
            <AboutThree />
            <FunFactTwo />
            <CtaOne page={true} />
            <ServiceTwo page={true} titleTwo="two" />
            <TestimonialsTwo page={true} />
            <FaqOne />
            <TeamOne />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;