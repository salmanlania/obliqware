'use client';

import Layout from "@/components/Layout/Layout";
import MainSliderOne from "@/components/MainSliderOne/MainSliderOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import AboutOne from "@/components/AboutOne/AboutOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import TeamOne from "@/components/TeamOne/TeamOne";
import OurSolution from "@/components/OurSolution/OurSolution";
import FeatureTwo from "@/components/FeatureTwo/FeatureTwo";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import SlideText from "@/components/SlideText/SlideText";
import ContactOne from "@/components/ContactOne/ContactOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import Mail from "@/components/Mail/Mail";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import GoogleTranslate from '@/components/GoogleTranslate/GoogleTranslate'





const RtlPage = () => {
    const [mounted, setMounted] = useState(false);

    const userLang = Cookies.get("userLang") || "en";
    console.log(userLang);



    useEffect(() => {
        // Check if the language cookie is set; if not, set it to Arabic
        const userLang = Cookies.get('userLang');
        if (!userLang) {
            Cookies.set('userLang', 'ar', { expires: 7 }); // Cookie expires in 7 days
        }
    }, [mounted]);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Layout>
            <GoogleTranslate lang={userLang} />
            <TopBar />
            <Header rtl={true} />
            <MainSliderOne />
            <FeatureOne />
            <CtaOne rtl={true} />
            <ServiceOne />
            <AboutOne rtl={true} />
            <FunFactOne rtl={true} />
            <CtaTwo rtl={true} />
            <TeamOne />
            <OurSolution />
            <FeatureTwo />
            <PojectOne />
            <ClientCarousel />
            <SlideText />
            <ContactOne rtl={true} />
            <BlogOne />
            <Mail />
            <Footer />
        </Layout>
    );
};

export default RtlPage;
