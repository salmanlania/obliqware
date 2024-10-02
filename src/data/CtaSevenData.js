import bg from '@/assets/images/shapes/cta-7-bg.png';
import shapeOne from '@/assets/images/resources/cta-7-1.png';
import shapeTwo from '@/assets/images/shapes/cta-7-2.png';
import shapeThree from '@/assets/images/shapes/cta-7-3.png';

const ctaSevenData = {
    bg,
    shapes: [shapeOne, shapeTwo, shapeThree],
    title: "Client To Review Customer Means to Look Something Memory.",
    contactInfo: [
        {
            id: 1,
            icon: "tolak-icons-two-phone-call",
            title: "Get Contact Now",
            text: "+11234 751 328",
            href: "+11234751328",
            subHref: "tel"
        },
        {
            id: 2,
            icon: "tolak-icons-two-mail",
            title: "Sent Email",
            text: "tolak@envato.com",
            href: "tolak@envato.com",
            subHref: "mailto"
        }
    ],
    button: {
        href: "contact",
        text: "Contact Us",
        icon: "tolak-icons-two-arrow-right-short"
    }
};

export default ctaSevenData;
