import blogImage1 from '@/assets/images/blog/blog-5-1.png';
import blogImage2 from '@/assets/images/blog/blog-5-2.png';
import blogImage3 from '@/assets/images/blog/blog-5-3.png';

const blogFiveData = {
    title: "What kind of Work are Blog",
    tagLine: "OUR Latest News",
    blogs: [
        {
            id: 1,
            image: blogImage1,
            date: "24 <span>May</span>",

            href: "blog-details-right",
            meta: {
                author: "Admin",
                comments: 2
            },
            title: "Are you Looking For a Solution Related",
            text: "Business tailored design of this in some we form solution."
        },
        {
            id: 2,
            image: blogImage2,
            date: "03 <span>Jun</span>",

            href: "blog-details-right",
            meta: {
                author: "Admin",
                comments: 2
            },
            title: "Management System for Blog Designers",
            text: "Business tailored design of this in some we form solution."
        },
        {
            id: 3,
            image: blogImage3,
            date: "20 <span>Jul</span>",

            href: "blog-details-right",
            meta: {
                author: "Admin",
                comments: 2
            },
            title: " We Provide Business For Specify work",
            text: "Business tailored design of this in some we form solution."
        }
    ]
};

export default blogFiveData;
