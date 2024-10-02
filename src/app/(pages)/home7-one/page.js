
import Layout from "@/components/Layout/Layout";
import React from "react";
import MainSliderSeven from "@/components/MainSliderSeven/MainSliderSeven";
import FeatureSix from "@/components/FeatureSix/FeatureSix";
import AboutSeven from "@/components/AboutSeven/AboutSeven";
import ServiceFive from "@/components/ServiceFive/ServiceFive";
import WhyChooseFive from "@/components/WhyChooseFive/WhyChooseFive";
import CtaEleven from "@/components/CtaEleven/CtaEleven";
import ProjectFour from "@/components/ProjectFour/ProjectFour";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import TestimonialsFive from "@/components/TestimonialsFive/TestimonialsFive";
import FunFactFour from "@/components/FunfactFour/FunFactFour";
import SolutionTwo from "@/components/SolutionTwo/Solution";
import OurHistory from "@/components/OurHistory/OurHistory";
import BlogSix from "@/components/BlogSix/BlogSix";
import CtaNine from "@/components/CtaNine/CtaNine";
import FooterSix from "@/components/FooterSix/FooterSix";
import HeaderSevenSingle from "@/components/HeaderSeven/HeaderSevenSingle";
import HeaderSevenSingleCloned from "@/components/HeaderSeven/HeaderSevenSingleCloned";


export const metadata = {
  title: "Home Seven || Obliqware || Your Sucess, We Declare",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};
const page = () => {
  return (
    <Layout pageTitle='homeSeven'>
      <HeaderSevenSingle />
      <HeaderSevenSingleCloned />
      <MainSliderSeven />
      <FeatureSix />
      <AboutSeven />
      <ServiceFive />
      <WhyChooseFive />
      <CtaEleven />
      <ProjectFour />
      <ClientCarousel pageTitle="homeSeven" />
      <TestimonialsFive />
      <FunFactFour />
      <SolutionTwo />
      <OurHistory />
      <BlogSix />
      <CtaNine />

      <FooterSix />
    </Layout>
  );
};

export default page;
