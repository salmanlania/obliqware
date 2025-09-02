import ContactOneService from '@/components/ContactOneService/ContactOneService';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeaderSpecial';
import ComingSoon from '@/components/ComingSoon/ComingSoon';
import React from 'react';

const title = "Coming Soon || Obliqware || Your Sucess, We Declare";

export const metadata = {
    title: title,
    description: title
};

const page = () => {
    return (
        <Layout>
            <ComingSoon />
            <FooterThree />
        </Layout>
    );
};

export default page;