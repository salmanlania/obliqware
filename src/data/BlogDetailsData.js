import blogDetailsImage from "@/assets/images/blog/blog-details-1.jpg";
import authorImage from "@/assets/images/blog/blog-details-author.jpg";
import commentImage1 from "@/assets/images/blog/blog-comment-1-1.jpg";
import commentImage2 from "@/assets/images/blog/blog-comment-1-2.jpg";
import post1 from '@/assets/images/blog/lp-1-3.jpg'
import post2 from '@/assets/images/blog/lp-1-4.jpg'
import post3 from '@/assets/images/blog/lp-1-5.jpg'


const sidebarData = {

    categories: [
        { href: '/blog-grid', text: 'Business', count: 8 },
        { href: '/blog-grid', text: 'Ui/Ux Design', count: 14 },
        { href: '/blog-grid', text: 'Professional', count: 12 },
        { href: '/blog-grid', text: 'Technology', count: 23 },
        { href: '/blog-grid', text: 'Development', count: 17 },
        { href: '/blog-grid', text: 'Web Design', count: 22 },
    ],
    tags: [
        { href: '/blog-grid', text: 'Design' },
        { href: '/blog-grid', text: 'Service' },
        { href: '/blog-grid', text: 'Top' },
        { href: '/blog-grid', text: 'Help' },
        { href: '/blog-grid', text: 'New' },
        { href: '/blog-grid', text: 'Best' },
        { href: '/blog-grid', text: 'Beauty' },
        { href: '/blog-grid', text: 'Sounds' },
    ],
    recentPosts: [
        {
            image: { src: post1, alt: 'tolak' },
            date: 'Aug 10, 2023',
            title: 'We play chimney pot Chip bonne.',
            href: '/blog-details-right',
        },
        {
            image: { src: post2, alt: 'tolak' },
            date: 'Aug 10, 2023',
            title: 'Get deep knowledge your beauty',
            href: '/blog-details-right',
        },
        {
            image: { src: post3, alt: 'tolak' },
            date: 'Aug 10, 2023',
            title: 'We round solution of york blog',
            href: '/blog-details-right',
        },
    ],
};



export const blogDetailsData = {
    sidebarData,
    image: blogDetailsImage,
    meta: {
        category: {
            name: "Business",
            href: "/blog-grid",
        },
        date: {
            author: "Loran Berasa",
            date: "Jun 4, 2023",
            href: "/blog-grid",
        },
    },
    title:
        "Business solution is a leading provider of software development, software outsourcing services programming service.",
    paragraphs: [
        "There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and business results.",
        "There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum.",
    ],
    features: [
        {
            icon: "icon-family",
            title: "Our Success Team Man",
        },
        {
            icon: "icon-agency",
            title: "Professional Service",
        },
        {
            icon: "icon-refund",
            title: "Latest Business Technology",
        },
        {
            icon: "icon-management",
            title: "Long Experience Support",
        },
    ],
    blockquote: {
        text:
            "Wesay are many variations of passages of Lorem Ipsum available, but the have suffered alteration in some form, by injected humour, oris ut. In interdum sem quis congue accumsan ellentesque convallis eros tiam ultricies finibus. . Nunc ac sem sit amet purus luctus.",
        author: {
            name: "Morata bara",
            designation: "Founder",
            image: authorImage,
            social: [
                {
                    name: "Facebook",
                    href: "https://facebook.com",
                    icon: "fab fa-facebook-f"
                },
                {
                    name: "Pinterest",
                    href: "https://pinterest.com",
                    icon: "fab fa-pinterest-p"
                },
                {
                    name: "Twitter",
                    href: "https://twitter.com",
                    icon: "fab fa-twitter"
                },
                {
                    name: "Instagram",
                    href: "https://instagram.com",
                    icon: "fab fa-instagram"
                },
            ],
        },
    },
    comments:

        [
            {
                image: commentImage1,
                name: "Porata Baran",
                date: "November 16, 2018 at 4:31 am",
                text:
                    "Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.",
                replyHref: "/blog-details-right", // Removed .html
            },
            {
                image: commentImage2,
                name: "Korata Mana",
                date: "November 16, 2018 at 4:31 am",
                text:
                    "Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.",
                replyHref: "/blog-details-right", // Removed .html
            },
        ],

    form: {
        title: "Leave a comment",
        fields: [
            {
                type: "text",
                name: "name",
                placeholder: "Your name",
            },
            {
                type: "email",
                name: "email",
                placeholder: "Email address",
            },
            {
                type: "textarea",
                name: "message",
                placeholder: "Write a message",
            },
        ],
        submitButton: {
            text: "Submit Comment",
        },
    },
};
