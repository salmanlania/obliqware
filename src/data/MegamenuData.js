import homeRtl from '@/assets/images/landing/home-rtl.jpg'
import homeBoxed from '@/assets/images/landing/home-boxed.jpg'
import homeSeven from '@/assets/images/landing/home-7.jpg'
import homeSix from '@/assets/images/landing/home-6.jpg'
import homeFive from '@/assets/images/landing/home-5.jpg'
import homeFour from '@/assets/images/landing/home-4.jpg'
import homeThree from '@/assets/images/landing/home-3.jpg'
import homeTwo from '@/assets/images/landing/home-2.jpg'
import homeOne from '@/assets/images/landing/home-1.jpg'
const megamenuData = {
    href: "/",
    menuData: [

        {
            id: 1,

            title: "Home Page 01",
            image: homeOne,
            href: "/",
            btns: [
                { id: 1, name: "Multi Page", href: "/" },
                { id: 2, name: "One Page", href: "home1-one" },
                { id: 3, name: "Dark Page", href: "home1-dark" }
            ]

        },
        {
            id: 2,

            title: "Home Page 02",
            image: homeTwo,
            href: "/home2",
            btns: [
                { id: 1, name: "Multi Page", href: "/home2" },
                { id: 2, name: "One Page", href: "home2-one" },
                { id: 3, name: "Dark Page", href: "home2-dark" }
            ]

        },
        {
            id: 3,

            title: "Home Page 03",
            image: homeThree,
            href: "/home3",
            btns: [
                { id: 1, name: "Multi Page", href: "/home3" },
                { id: 2, name: "One Page", href: "home3-one" },
                { id: 3, name: "Dark Page", href: "home3-dark" }
            ]

        },
        {
            id: 4,

            title: "Home Page 04",
            image: homeFour,
            href: "/home4",
            btns: [
                { id: 1, name: "Multi Page", href: "/home4" },
                { id: 2, name: "One Page", href: "home4-one" },
                { id: 3, name: "Dark Page", href: "home4-dark" }
            ]

        }
        ,
        {
            id: 5,

            title: "Home Page 05",
            image: homeFive,
            href: "/home5",
            btns: [
                { id: 1, name: "Multi Page", href: "home5" },
                { id: 2, name: "One Page", href: "home5-one" }
            ]

        },
        {
            id: 6,

            title: "Home Page 06",
            image: homeSix,
            href: "/home6",
            btns: [
                { id: 1, name: "Multi Page", href: "home6" },
                { id: 2, name: "One Page", href: "home6-one" }
            ]

        },
        {
            id: 7,

            title: "Home Page 07",
            image: homeSeven,
            href: "/home7",
            btns: [
                { id: 1, name: "Multi Page", href: "home7" },
                { id: 2, name: "One Page", href: "home7-one" }
            ]

        },
        {
            id: 8,

            title: "Home Boxed",
            image: homeBoxed,
            href: "/home-boxed",
            btns: [
                { id: 1, name: "View Page", href: "/home-boxed" },

            ]

        }
        ,
        {
            id: 9,

            title: "Home RTL",
            image: homeRtl,
            href: "/home-rtl",
            btns: [
                { id: 1, name: "View Page", href: "/home-rtl" },

            ]

        }

    ]
};
export default megamenuData;