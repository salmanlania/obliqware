import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText:
    "Business tailored it design, management & support business agency elit, sed do eiusmod tempor.",
  infoTitle: "Contact Information ",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call This Now",
      text: "+923462488254",
      href: "025461556695",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Your Message",
      text: "amar@mail.com",
      href: "amar@mail.com",
      subHref: "mailto",
    },

    {
      id: 3,
      icon: "icon-pin",
      title: "Your location",
      text: "Dhaka ,56 Besta",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faLinkedin,
      link: "https://pinterest.com",
      name: "Pinterest",
    },
    { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com",
      name: "Instagram",
    },
  ],

  tagLine: "Our Contact Us",
  title: "Get free Business touch Customers me.",
  text: "Business tailored it design, management & support services \n business agency elit, sed do eiusmod tempor.",
};

export default contactTwoData;
