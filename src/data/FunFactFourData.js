import image from "@/assets/images/resources/funfact-4-1.jpg";
import itemShape from "@/assets/images/shapes/funfact-4-shape.png";

const funFactFourData = {
  tagLine: "OUR BEST COUNTER",
  title: "Our penetration Counter \n Team Uses an industry",
  text: "We provide tailored design, management, and support services. Our team brings a wealth of experience and expertise to every project, ensuring top-tier results for all our clients.",
  image,
  items: [
    {
      id: 1,
      bg: itemShape,
      icon: "tolak-icons-two-folder-management",
      text: "Projects Company",
      count: 3655,
      suffix: "+",
    },
    {
      id: 2,
      bg: itemShape,
      icon: "tolak-icons-two-team-work",
      text: "Team Support",
      count: 965,
      suffix: "k+",
    },
    {
      id: 3,
      bg: itemShape,
      icon: "tolak-icons-two-rating-stars",
      text: "Happy Clients",
      count: 852,
      suffix: "+",
    },
    {
      id: 4,
      bg: itemShape,
      icon: "tolak-icons-two-medal",
      text: "Awards Won",
      count: 250,
      suffix: "k+",
    },
  ],
};

export default funFactFourData;
