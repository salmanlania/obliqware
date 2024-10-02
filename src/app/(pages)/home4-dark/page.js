
import AboutFour from "@/components/AboutFour/AboutFour";
import BlogOne from "@/components/BlogOne/BlogOne";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FaqOneDark from "@/components/FaqOneDark/FaqOneDark";
import FeatureTwo from "@/components/FeatureTwo/FeatureTwo";
import Footer from "@/components/Footer/Footer";
import HeaderFour from "@/components/HeaderFour/HeaderFour";
import HeaderFourCloned from "@/components/HeaderFour/HeaderFourCloned";
import Layout from "@/components/Layout/Layout";
import Mail from "@/components/Mail/Mail";
import MainSliderFour from "@/components/MainSliderFour/MainSliderFour";
import OurSolution from "@/components/OurSolution/OurSolution";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceHomeFour from "@/components/ServiceHomeFour/ServiceHomeFour";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialsThree from "@/components/TestimonialsThree/TestimonialsThree";
import WhyChooseTwo from "@/components/WhyChooseTwo/WhyChooseTwo";
import React from "react";

export const metadata = {
  title: "Home Four || Obliqware || Your Sucess, We Declare",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='homeFour'>
      <HeaderFour />
      <HeaderFourCloned />
      <MainSliderFour />
      <ClientCarousel pageTitle='homeFour' dark={true} />
      <AboutFour />
      <ServiceHomeFour />
      <CtaTwo />
      <WhyChooseTwo />
      <OurSolution Two={true} dark={true} />
      <FeatureTwo />
      <TeamOne titleTwo="two" />
      <FaqOneDark />
      <PricingOne />
      <TestimonialsThree />
      <BlogOne two={true} />
      <Mail />
      <Footer />
    </Layout>
  );
};

export default page;
