import image from '@/assets/images/resources/counter-1-1.jpeg'
import shape from '@/assets/images/shapes/counter-border-1.png'
import shapeRtl from '@/assets/images/shapes/counter-border-1-rtl.png'

const funFactOneData = {
    image,
    shape,
    shapeRtl,
    items: [
        {
            id: 1,
            text: 'Successflly Trained',
            count: "63",
            identity: ""

        },
        {
            id: 2,
            text: 'Projects Complited',
            count: "26",
            identity: "funfact-one__item--two"

        },
        {
            id: 3,
            text: 'Customers Support',
            count: "26",
            identity: "funfact-one__item--three"

        }
    ]
    ,
    accordionData: [
        {
          id: 1,
          header: 'Innovative Solutions, Tailored for You',
          content: "While every business is unique, we bring a personalized approach to ensure the right solutions for your success. Let’s create something great together."
        },
        {
          id: 2,
          header: 'Driving Innovation for Your Business',
          content: "No two businesses are the same, which is why we focus on delivering solutions that truly fit your needs. Let’s explore what’s possible for your business."
        },
        {
          id: 3,
          header: 'Solutions That Evolve with Your Needs',
          content : "We understand that business needs change over time. That’s why our solutions are flexible and designed to grow with you, ensuring lasting success."
        },
        {
          id: 4,
          header: 'Why Join the Obliqware Team?',
          content: "At Obliqware, we believe in growth, innovation, and collaboration. Join our team and be part of a culture where your ideas matter, and your career can thrive."
    
        },
        {
          id: 5,
          header: 'Designing Success, One Solution at a Time',
          content: "At Obliqware, we craft every solution with care, ensuring it fits your business perfectly. Let’s work together to shape your future success."
        },
      ]
}

export default funFactOneData;