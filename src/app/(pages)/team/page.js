
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import TeamOne from '@/components/TeamOne/TeamOne';
import TeamOnePage from '@/components/TeamOnePage/TeamOnePage';
import React from 'react';

export const metadata = {
    title: "Team Page || Obliqware || Your Sucess, We Declare",
    description: "Team Page || Obliqware || Your Sucess, We Declare",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Team Page" subTitle="Team" />
            <TeamOnePage titleTwo="two" />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;