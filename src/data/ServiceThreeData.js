import bg from '@/assets/images/backgrounds/service-bg-3.jpg';
import shape from '@/assets/images/shapes/service-shape-3.png';
import image1 from '@/assets/images/resources/service-3-1.jpg';
import image2 from '@/assets/images/resources/service-3-2.jpg';
import image3 from '@/assets/images/resources/service-3-3.jpg';
import image4 from '@/assets/images/resources/service-3-4.jpg';

const serviceThreeData = {

    bg,
    shape,


    tagLine: "OUR BEST SERVICE",
    title: "We Are Service Your Business",

    carouselData: [
        {
            id: 1,
            image: image1,
            icon: "tolak-icons-two-smart-grid",
            title: "Network Infrastructure",
            text: "Solution the connection, we create platforms business Solution",
            href: "business-growth",
        },
        {
            id: 2,
            image: image2,
            icon: "tolak-icons-two-algorithm",
            title: "Data Management",
            text: "Solution the connection, we create platforms business Solution",
            href: "business-support",
        },
        {
            id: 3,
            image: image3,
            icon: "tolak-icons-two-cybersecurity",
            title: "Technology Solution",
            text: "Solution the connection, we create platforms business Solution",
            href: "technology-services",
        },
        {
            id: 4,
            image: image4,
            icon: "tolak-icons-two-seo",
            title: "Software Business",
            text: "Solution the connection, we create platforms business Solution",
            href: "business-marketing",
        },
    ],
};

export default serviceThreeData;
