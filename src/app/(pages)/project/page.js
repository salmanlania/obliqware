import FooterThree from "@/components/FooterThree/FooterThree";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import React from "react";

export const metadata = {
  title: "Project || Obliqware || Your Sucess, We Declare",
  // title: "Project || Obliqware || Your Sucess, We Declare",
  description:
    "Project || Obliqware || Your Sucess, We Declare",
};

const projectPage = () => {
  return (
    <Layout >
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader title='Project' subTitle='Project' />
      <ProjectTwo />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default projectPage;
