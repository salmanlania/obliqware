
import ContactOneService from '@/components/ContactOneService/ContactOneService';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import React from 'react';

const title = "Artificial Intelligence Solutions Science and Data || Obliqware || Your Sucess, We Declare";
export const metadata = {
    title: title,
    description: title,
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Artificial Intelligence Solutions" subTitle="Service Details" />
            <ServiceDetails />
            <ContactOneService />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;