import image1 from "@/assets/images/project/project-2-1.jpg";
import image2 from "@/assets/images/project/project-2-2.jpg";
import image3 from "@/assets/images/project/project-2-3.jpg";
import image4 from "@/assets/images/project/project-2-4.jpg";
import image5 from "@/assets/images/project/project-2-5.jpg";
import image6 from "@/assets/images/project/project-2-6.jpg";
const projectsData = {
  title: "We Have Business Case Studies",
  subtitle: "Our Projects Now",
  filterCategories: [
    { name: "All", filterClass: "filter-item" },
    { name: "Business", filterClass: "business" },
    { name: "Solution", filterClass: "solution" },
    { name: "Marketing", filterClass: "marketing" },
    { name: "Software", filterClass: "software" },
  ],
  projects: [
    {
      image: image1,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["marketing"],
      xl: 3,
      md: 6,
    },
    {
      image: image2,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["business", "solution"],
      xl: 3,
      md: 6,
    },
    {
      image: image3,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["software", "business"],
      xl: 6,
      md: 12,
    },
    {
      image: image4,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["soluion"],
      xl: 6,
      md: 12,
    },
    {
      image: image5,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["marketing", "software"],
      xl: 3,
      md: 6,
    },
    {
      image: image6,
      category: "Marketing",
      title: "Business Of Growth",
      link: "/project-details",
      filterClasses: ["business", "solution"],
      xl: 3,
      md: 6,
    },
  ],
};

export default projectsData;
