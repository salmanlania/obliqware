import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import Privacy from '@/components/Privacy/Privacy';
import React from 'react';

export const metadata = {
    title: "Privacy & Policies || Obliqware || Your Sucess, We Declare",
    description:
        "Privacy & Policies || Obliqware || Your Sucess, We Declare"
};

const page = () => {
    return (

        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Privacy & Policies" subTitle="Privacy & Policies" />
            <Privacy />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;