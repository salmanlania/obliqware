
import AboutThree from '@/components/AboutOne/AboutOne';
import CtaOne from '@/components/CtaOne/CtaOne';
import FaqOne from '@/components/FaqOne/FaqOne';
import FooterThree from '@/components/Footer/Footer';
import FunFactTwo from '@/components/FunFactTwo/FunFactTwo';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceTwo from '@/components/ServiceOne/ServiceOne';
import TeamOne from '@/components/TeamOne/TeamOne';
import TestimonialsTwo from '@/components/TestimonialsTwo/TestimonialsTwo';
import React from 'react';

const titles = "Home || Obliqware || Your Sucess, We Declare"

export const metadata = {
    title: titles,
    description: titles
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="About Page" subTitle="About" />
            <br />
            <AboutThree />
            <br />
            <FunFactTwo />
            <CtaOne page={true} />
            <ServiceTwo page={true} titleTwo="two" />
            <TestimonialsTwo page={true} />
            <FaqOne />
            {/* <TeamOne /> */}
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;