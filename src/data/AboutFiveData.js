import bgShape from '@/assets/images/shapes/about-5-shape-1.png';
import image1 from '@/assets/images/resources/about-5-1.jpg';
import image2 from '@/assets/images/resources/about-5-2.jpg';
import shapeOne from '@/assets/images/shapes/about-5-shape-2.png';
import shapeTwo from '@/assets/images/shapes/about-5-shape-3.png';

const aboutFiveData = {
    bgShape,
    images: {
        image1,
        image2,
    },
    shapes: {
        shapeOne,
        shapeTwo,
    },
    experience: {
        count: 26,
        text: "Experience Working",
    },
    content: {
        tagLine: "OUR ABOUT COMPANY",
        title: "Our Experience About 29+ Years Experience And Challenge!",
        text: "Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
        listOne: [
            "Team Support",
            "Business Management",
            "Business tailored",
            "Consultancy & solution",
        ],
        listTwo: [
            "Network Infrastructure software",
            "Technology Consulting Solution",
        ],
        btnText: "About More",
        btnLink: "/about",
    },
    infoText: "If you're experiencing network issues or need to",
    infoLink: {
        text: "Solution Service",
        href: "/services",
    },
};

export default aboutFiveData;
