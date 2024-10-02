import React from 'react';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceOne from '@/components/ServiceOne/ServiceOne';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';


export const metadata = {
    title: "Service Page || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Service Page" subTitle="Services" />
            <ServiceOne titleTwo="two" />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;