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
      href: "+923462488254",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Your Message",
      text: "info@obliqware.pk",
      href: "info@obliqware.pk",
      subHref: "mailto",
    },

    {
      id: 3,
      icon: "icon-pin",
      title: "Your location",
      text: "Karachi, Pakistan",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com/obliqware",
      name: "Facebook",
      target: "_blank",
    },
    {
      id: 2,
      icon: faLinkedin,
      link: "https://linkedin.com/company/obliqware",
      name: "LinkedIn",
      target: "_blank",
    },
    { id: 3, 
      icon: faTwitter, 
      link: "https://twitter.com/obliqware", 
      name: "Twitter",
      target: "_blank", 
    },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com/obliqware",
      name: "Instagram",
      target: "_blank",
    },
  ],

  tagLine: "Our Contact Us",
  title: "Connect With Us",
  text: "We’re here to support your business. Reach out for custom solutions in design, management, and support.",
  appointmentTagLine: "Our Appointment",
  appointmentTitle: "Schedule a Free Consultation",
  appointmentText: "Book a time to explore tailored solutions that fit your business needs.",
};

export default contactTwoData;
