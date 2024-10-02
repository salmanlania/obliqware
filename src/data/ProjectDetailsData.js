import projectImage1 from "@/assets/images/project/project-detail-1.jpg";
import projectImage2 from "@/assets/images/project/project-detail-2.jpg";
import authorImage1 from "@/assets/images/resources/cta-1-author-1.jpg";
import authorImage2 from "@/assets/images/resources/cta-1-author-2.jpg";
import authorImage3 from "@/assets/images/resources/cta-1-author-3.jpg";

const projectDetailsData = {
  mainImage: projectImage1,
  details: {
    title: "Projects Details:",
    description: `About : Phis are bound to ensue; and equal blame belongs to those who through weakness of will, which is the same as through.
                  We have the and industry expertise to develop solutions that can connect the you need to craft an idea for a completely new product or 
                  elevate the quality of an existing solution.`,
    infoList: [
      { icon: "icofont-check-circled", label: "Client", value: "Burosa (USA)" },
      { icon: "icofont-check-circled", label: "Date", value: "March 21, 2020" },
      { icon: "icofont-check-circled", label: "Category", value: "Technology" },
      { icon: "icofont-check-circled", label: "Location", value: "Dhaka" },
    ],
  },
  paragraphs: [
    `Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. 
     These are often for specific projects such as building or renovation projects that are sold or leased. It uses a dictionary of 22 with a 
     handful of model sentence structures, to generate Lorem Ipsum which looks therefore always free from repetition, injected humour, sure there 
     isn’t anything hidden in the middle of text. Reenergize your home and enhance your life.`,
    `Will reenergize your home and enhance your life. From everyday housekeeping to routine cleanings, our professionals use a dictionary of words, 
     combined with a handful of model sentence structures.`,
  ],
  additionalImage: projectImage2,
  customerSection: {
    solutionTitle: "Solution System Design",
    solutionText: `Every team has a culture and set of ct ations that have either been aed orsve naturally evolved.`,
    authorImages: [authorImage1, authorImage2, authorImage3],
    moreLink: {
      text: "More",
      href: "contact.html",
      icon: "fas fa-arrow-right",
    },
    customerText: `29,0000 customers with our services `,
    customerLink: { text: "Let’s Started", href: "contact" },
  },
  finalParagraph: `Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. 
                   These are often for specific projects such as building or renovation projects that are sold or leased. It uses a dictionary of 22 with a handful 
                   of model sentence structures, to generate Lorem Ipsum which looks therefore always free from repetition, injected humour, sure there isn’t anything 
                   hidden in the middle of text. Reenergize your home and enhance your life.`,
};

export default projectDetailsData;
