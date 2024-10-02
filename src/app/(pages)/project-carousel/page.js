import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import React from "react";
import HeaderInner from "@/components/HeaderInner/HeaderInner";

import MailTwo from "@/components/MailTwo/MailTwo";
import FooterThree from "@/components/FooterThree/FooterThree";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";

export const metadata = {
  title: "Project Carousel || Obliqware || Your Sucess, We Declare",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='page'>
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Project Carousel' subTitle='Project' />
      <PojectOne titleTwo='two' />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
