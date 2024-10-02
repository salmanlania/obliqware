
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import FooterThree from "@/components/FooterThree/FooterThree";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamDetails from "@/components/TeamDetails/TeamDetails";
import TeamOne from "@/components/TeamOne/TeamOne";
import React from 'react';

export const metadata = {
    title: "Team Details || Obliqware || Your Sucess, We Declare",
    description:
        "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Team Details" subTitle="Team Details" />
            <TeamDetails />
            <FunFactTwo />
            <TeamOne titleTwo="two" />
            <ClientCarousel pageTitle="teamDetails" />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;