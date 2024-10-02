import tabShape from "@/assets/images/shapes/tab-one-title.png";
import tabImage1 from "@/assets/images/resources/tab-1-1.jpg";
import tabImage2 from "@/assets/images/resources/tab-1-2.jpg";
import tabImage3 from "@/assets/images/resources/tab-1-3.jpg";
import tabImage4 from "@/assets/images/resources/tab-1-4.jpg";
import author1 from "@/assets/images/resources/cta-1-author-1.jpg";
import author2 from "@/assets/images/resources/cta-1-author-2.jpg";
import author3 from "@/assets/images/resources/cta-1-author-3.jpg";

export const tabOneData = {

    tagLine: "Best Of Skill Tab",
    title: "These are Specific Teachable Skill Defined",

    tabItems: [
        {
            id: 1,
            icon: "tolak-icons-two-solutions-three",
            title: "Technological Solutions",
            shape: tabShape,
        },
        {
            id: 2,
            icon: "tolak-icons-two-lightbulb-dollar",
            title: "Competitor Research",
            shape: tabShape,
        },
        {
            id: 3,
            icon: "tolak-icons-two-solution-1",
            title: "Consulting Planning",
            shape: tabShape,
        },
        {
            id: 4,
            icon: "tolak-icons-two-cybersecurity",
            title: "Management Solutions",
            shape: tabShape,
        },
    ],
    tabContents: [
        {
            id: 1,
            image: tabImage1,
            title: "The Best Subjective Interpersonal Skills That Business.",
            text: "Business tailored design, management & support services...",
            listItems: [
                "Team Support",
                "Business Management",
                "Business tailored",
                "Consultancy & solution",
            ],
            authors: [author1, author2, author3],
        },
        {
            id: 2,
            image: tabImage2,
            title: "The Best Subjective Interpersonal Skills That Business.",
            text: "Business tailored design, management & support services...",
            listItems: [
                "Team Support",
                "Business Management",
                "Business tailored",
                "Consultancy & solution",
            ],
            authors: [author1, author2, author3],
        },
        {
            id: 3,
            image: tabImage3,
            title: "The Best Subjective Interpersonal Skills That Business.",
            text: "Business tailored design, management & support services...",
            listItems: [
                "Team Support",
                "Business Management",
                "Business tailored",
                "Consultancy & solution",
            ],
            authors: [author1, author2, author3],
        },
        {
            id: 4,
            image: tabImage4,
            title: "The Best Subjective Interpersonal Skills That Business.",
            text: "Business tailored design, management & support services...",
            listItems: [
                "Team Support",
                "Business Management",
                "Business tailored",
                "Consultancy & solution",
            ],
            authors: [author1, author2, author3],
        },
    ],
};
