import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import Terms from '@/components/Terms/Terms';
import React from 'react';

export const metadata = {
    title: "Terms & Conditions || Obliqware || Your Sucess, We Declare",
    description:
    "Terms & Conditions || Obliqware || Your Sucess, We Declare"        
};

const page = () => {
    return (

        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Terms & Conditions" subTitle="Terms & Conditions" />
            <Terms />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;