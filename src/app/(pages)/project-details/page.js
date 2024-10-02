import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import React from "react";
import ProjectDetailsFaq from "@/components/ProjectDetailsFaq/ProjectDetailsFaq";
import MailTwo from "@/components/MailTwo/MailTwo";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import FooterThree from "@/components/FooterThree/FooterThree";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";

export const metadata = {
  title: "Project Details || Obliqware || Your Sucess, We Declare",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='page'>
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Project Details' subTitle='Project Details' />
      <ProjectDetails />
      <ProjectDetailsFaq />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
