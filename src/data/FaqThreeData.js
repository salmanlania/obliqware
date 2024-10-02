import accordionImage from '@/assets/images/resources/accordian-image.jpg';
import faqImage1 from '@/assets/images/resources/faq-3-1.jpg';
import faqImage2 from '@/assets/images/resources/faq-3-2.jpg';
import faqImage3 from '@/assets/images/resources/faq-3-3.jpg';

const faqThreeData = {
    tagLine: "Our Faq Us",
    title: "Can Faqs Help Improve For This Customer Satisfaction?",
    text: "Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.",
    accordionData: [
        {
            id: 1,
            title: "Maecenas facilisis erat id solution business",
            icon: "fa fa-check-circle",

            image: accordionImage,
            text: "Solution the connection, we create business marketing platforms business Solution",

            isActive: false,
        },
        {
            id: 2,
            title: "Digital data facilisis erat id solution business",
            icon: "fa fa-check-circle",

            image: accordionImage,
            text: "Solution the connection, we create business marketing platforms business Solution",

            isActive: true,
        },
        {
            id: 3,
            title: "We adapt our delivery to the way your solution",
            icon: "fa fa-check-circle",

            image: accordionImage,
            text: "Solution the connection, we create business marketing platforms business Solution",

            isActive: false,
        },
    ],
    faqImage1,
    faqImage2,
    faqImage3,


};

export default faqThreeData;
