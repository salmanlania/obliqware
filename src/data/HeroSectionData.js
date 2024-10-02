import heroBgImage from '@/assets/images/tolak-landing/hero-bg-1-1.png';
import logoImage from '@/assets/images/tolak-landing/main-logo-1-1.png';
import heroImg1 from '@/assets/images/tolak-landing/hero-img-1-1.png';
import heroImg2 from '@/assets/images/tolak-landing/hero-img-1-2.png';
import heroImg3 from '@/assets/images/tolak-landing/hero-img-1-3.png';


export const heroSectionData = {
    bgImage: heroBgImage,
    logo: {
        src: logoImage,
        width: 156,
        height: 49,
        alt: "tolak",
        href: "/",
    },
    title: "Creative. Powerful. \n Customizable.",
    text: "Building a website with the Tolak NextJS \n Template is super fast and easy.",
    button: {
        text: "Purchase Template",
        href: "#",
        target: "_blank",
    },
    images: [
        {
            src: heroImg3,
            alt: "home three",
            width: 659,
            height: 658,
            animationDelay: "1500ms",
        },
        {
            src: heroImg2,
            alt: "home two",
            width: 779,
            height: 524,
            animationDelay: "1000ms",
        },
        {
            src: heroImg1,
            alt: "home one",
            width: 899,
            height: 258,
            animationDelay: "0ms",
        },
    ],
};
