
import shape from '@/assets/images/shapes/service-4-bottom-shape.png';
import image1 from '@/assets/images/resources/service-4-1.jpg';
import image2 from '@/assets/images/resources/service-4-2.jpg';
import image3 from '@/assets/images/resources/service-4-3.jpg';
import image4 from '@/assets/images/resources/service-4-4.jpg';

const serviceFourData = {

    shape,
    tagLine: "OUR BEST SERVICE",
    title: "We Are Service Your Business",
    carouselData: [
        {
            id: 1,
            image: image1,
            icon: "tolak-icons-two-smart-grid",
            title: "Technology Solution",
            text: "Solution the we create this business Solution",
            href: "technology-services",
        },
        {
            id: 2,
            image: image2,
            icon: "tolak-icons-two-algorithm",
            title: "Business Growth",
            text: "Solution the we create this business Solution",
            href: "business-growth",
        },
        {
            id: 3,
            image: image3,
            icon: "tolak-icons-two-cybersecurity",
            title: "Consultency Plan",
            text: "Solution the we create this business Solution",
            href: "business-solution",
        },
        {
            id: 4,
            image: image4,
            icon: "tolak-icons-two-seo",
            title: "Software Business",
            text: "Solution the we create this business Solution",
            href: "business-marketing",
        },
    ],
    bottom: {
        title: "We Provide More Details Let Me Know What You Need Help",
        list: [
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Consultancy & solution",
            },
            {
                icon: "tolak-icons-two-arrow-circle-right",
                text: "Competitor Research Business",
            },
        ],
        btnText: "View All Service",
        btnLink: "/about",
    },
};

export default serviceFourData;
