
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import Layout from '@/components/Layout/Layout';

import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import Products from '@/components/Products/Products';

import React from 'react';

export const metadata = {
    title: "Products Left Sidebar || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <PageHeader title="Products" subTitle="Products" />
            <Products />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;