
import FooterThree from "@/components/FooterThree/FooterThree";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import TestimonialsOnePage from "@/components/TestimonialsOnePage/TestimonialsOnePage";
import React from 'react';


export const metadata = {
    title: "Testimonial Page || Obliqware || Your Sucess, We Declare",
    description: "Testimonial Page || Obliqware || Your Sucess, We Declare",
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Testimonial" subTitle="Testimonial" />
            <TestimonialsOnePage />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;