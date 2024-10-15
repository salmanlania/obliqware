import BlogThreeGrid from '@/components/BlogThreeGrid/BlogThreeGrid';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';

const title = "Blog || Obliqware || Your Sucess, We Declare";

export const metadata = {
    title: title,
    description: title,
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Blog" subTitle="Blog" />
            <BlogThreeGrid />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;