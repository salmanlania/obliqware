import image1 from "@/assets/images/project/costmetics.png";
// import image2 from "@/assets/images/project/project-2-2.jpg";
import image2 from "@/assets/images/project/multimart.png";
import image3 from "@/assets/images/project/foodypanda.png";
import image4 from "@/assets/images/project/startup-1.1.png";
import image5 from "@/assets/images/project/food-panda.png";
import image6 from "@/assets/images/project/startup.png";
const projectsData = {
  title: "We Have Business Case Studies",
  subtitle: "Our Projects Now",
  filterCategories: [
    // { name: "All", filterClass: "filter-item" },
    // { name: "Web", filterClass: "web" },
    // { name: "Mobile App", filterClass: "mobile" },
    // { name: "Marketing", filterClass: "marketing" },
    // { name: "Software", filterClass: "software" },
  ],
  projects: [
    {
      image: image1,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["marketing"],
      xl: 3,
      md: 6,
    },
    {
      image: image2,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["web", "mobile"],
      xl: 3,
      md: 6,
    },
    {
      image: image3,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["software", "web"],
      xl: 6,
      md: 12,
    },
    {
      image: image4,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["soluion"],
      xl: 6,
      md: 12,
    },
    {
      image: image5,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["marketing", "software"],
      xl: 3,
      md: 6,
    },
    {
      image: image6,
      category: "",
      title: "",
      link: "/project-details",
      filterClasses: ["web", "mobile"],
      xl: 3,
      md: 6,
    },
  ],
};

export default projectsData;
