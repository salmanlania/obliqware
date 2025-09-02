import logo from "@/assets/images/logo-dark.png";
import footerLogo from "@/assets/images/logo-light.png";
import logo4 from "@/assets/images/logo-4.png";
import logo6 from "@/assets/images/logo-6.png";
// import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import footerBg from "@/assets/images/backgrounds/footer-bg-main.jpg";
import footerBgTwo from "@/assets/images/backgrounds/footer-bg-2-1.jpg";
import footerBgThree from "@/assets/images/backgrounds/footer-bg-3-1.jpg";
import footerBgFour from "@/assets/images/backgrounds/footer-bg-4-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
// import footerAbout from "@/assets/images/resources/footer-about.jpg";
import footerAbout from "@/assets/images/resources/footer-about.webp";
// import post1 from "@/assets/images/blog/lp-1-1.jpg";
// import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post1 from "@/assets/images/newBlog/web.png";
import post2 from "@/assets/images/newBlog/mob.png";
import post6 from "@/assets/images/blog/lp-1-6.jpg";
import post7 from "@/assets/images/blog/lp-1-7.jpg";

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://facebook.com/obliqware", title: "Facebook" },
  {
    id: 2,
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/obliqware",
    title: "Linkedin",
  },
  { id: 3, icon: faTwitter, href: "https://twitter.com/obliqware", title: "Twitter" },
  {
    id: 4,
    icon: faInstagram,
    href: "https://instagram.com/obliqware",
    title: "Instagram",
  },
];

const posts = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post1,
      meta: "15 oct 2024",
      title: "Web Development Solutions for Your Business",
      href: "blog",
      icon: "icofont-calendar"
    },
    {
      id: 2,
      image: post2,
      meta: "29 sep 2024",
      title: "We provide top-notch app development solutions",
      href: "blog",
      icon: "icofont-calendar"
    },
  ],
};
const postsSix = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post6,
      meta: "20 Nov 2023",
      title: "This Specific Issue Network Security",
      href: "blog-details",
      icon: "icofont-calendar"
    },
    {
      id: 2,
      image: post7,
      meta: "23 jun 2023",
      title: "Looking For a Solution Related",
      href: "blog-details",
      icon: "icofont-calendar"
    },
  ],
};

const footerData = {
  footerLogo,
  logo,
  logo4,
  logo6,
  footerBg,
  footerBgTwo,
  footerBgThree,
  footerBgFour,
  shape,
  shapeTwo,
  footerAbout,
  posts,
  postsSix,
  aboutTwoText: "Will give you a complete account the system, and expound the teachings of the great explorer the truth, the master-builder because ...",
  widgetText:
    // "Automotive’s four Frederick locations continues its years tradition of quality auto repair services. ehicle owners in gym enter and take a look.",
    "With years of delivering quality IT solutions, Obliqware is your trusted partner for web, mobile, and software development. Explore our services and let's drive your business forward.",
  widgetInfo: {
    time: "Open Hours of Government:\n Mon - Fri: 8.00 am. - 6.00 pm.",
    timeIcon: "icofont-clock-time",
    location: "13/A, Miranda Halim City .",
    locationIcon: "icofont-location-pin",
    tel: "099 695 695 35",
    telIcon: "icofont-phone",
    subHref: "tel",
  },
  widgetSocial,
  services: [
    { id: 1, name: "Web Development", href: "/web-development" },
    { id: 2, name: "Mobile App Development", href: "/mobile-app-development" },
    { id: 3, name: "Artificial Intelligence Solutions", href: "/ai-solution" },
    { id: 4, name: "UI/UX Design", href: "/ui-ux-design" },
    { id: 5, name: "Graphic Design", href: "/graphic-design" },
    { id: 6, name: "Specialized Offerings", href: "/specialized-offerings" },
  ],
  quickLinks: [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/project", title: "Our projects" },
    { id: 3, href: "/packages", title: "Packages" },
    { id: 4, href: "/team", title: "Team" },
    { id: 5, href: "/contact", title: "Contact" },
    { id: 6, href: "/blog", title: "News" },
  ],
  bottomLinks: [
    { id: 1, href: "/about", title: "About Us" },
    { id: 2, href: "/services", title: "Services" },
    { id: 3, href: "/blog-list-right", title: "News" },
    { id: 4, href: "/project", title: "Our Project" },
  ],
};

export default footerData;
