import ContactTwo from '@/components/ContactTwo/ContactTwo';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import React from 'react';


export const metadata = {
    title: "Contact || Obliqware || Your Sucess, We Declare",
    description: 'Contact || Obliqware || Your Sucess, We Declare'
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Contact Page" subTitle="Contact" />
            <ContactTwo contact="page" />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;