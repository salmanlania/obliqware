
import AboutThree from "@/components/AboutThree/AboutThree";
import BlogThree from "@/components/BlogThree/BlogThree";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import ContactTwo from "@/components/ContactTwo/ContactTwo";
import CtaFive from "@/components/CtaFive/CtaFive";
import CtaSix from "@/components/CtaSix/CtaSix";
import FeatureFour from "@/components/FeatureFour/FeatureFour";
import FeatureThree from "@/components/FeatureThree/FeatureThree";
import FooterThree from "@/components/FooterThree/FooterThree";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import HeaderThree from "@/components/HeaderThree/HeaderThree";
import HeaderThreeCloned from "@/components/HeaderThree/HeaderThreeCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import MainSliderThree from "@/components/MainSliderThree/MainSliderThree";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import SkillOne from "@/components/SkillOne/SkillOne";
import TeamTwo from "@/components/TeamTwo/TeamTwo";
import TestimonialsTwo from "@/components/TestimonialsTwo/TestimonialsTwo";
import TopbarThree from "@/components/TopbarThree/TopbarThree";
import WhyChooseOne from "@/components/WhyChooseOne/WhyChooseOne";
import React from "react";

export const metadata = {
  title: "Home Three || Obliqware || Your Sucess, We Declare",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='homeThree'>
      <TopbarThree />
      <HeaderThree dark={true} />
      <HeaderThreeCloned dark={true} />
      <MainSliderThree />
      <FeatureFour />
      <AboutThree />
      <FunFactTwo />
      <CtaSix />
      <WhyChooseOne />
      <TestimonialsTwo />
      <ProjectTwo />
      <CtaFive />
      <TeamTwo />
      <ClientCarousel pageTitle="homeThree" dark={true} />
      <SkillOne />
      <FeatureThree />
      <ContactTwo />
      <BlogThree />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
