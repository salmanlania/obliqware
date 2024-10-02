
import FooterThree from '@/components/FooterThree/FooterThree';
import GalleryFilter from '@/components/GalleryFilter/GalleryFilter';
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid';

import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';


export const metadata = {
    title: "Gallery Grid || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};
const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Gallery Grid" subTitle="Gallery" />
            <GalleryGrid />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;