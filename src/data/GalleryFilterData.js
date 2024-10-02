// Import images
import galleryImage1 from '@/assets/images/gallery/gallery-1-1.jpg';
import galleryImage2 from '@/assets/images/gallery/gallery-1-2.jpg';
import galleryImage3 from '@/assets/images/gallery/gallery-1-3.jpg';
import galleryImage4 from '@/assets/images/gallery/gallery-1-4.jpg';
import galleryImage5 from '@/assets/images/gallery/gallery-1-5.jpg';
import galleryImage6 from '@/assets/images/gallery/gallery-1-6.jpg';
import galleryImage7 from '@/assets/images/gallery/gallery-1-7.jpg';
import galleryImage8 from '@/assets/images/gallery/gallery-1-8.jpg';
import galleryImage9 from '@/assets/images/gallery/gallery-1-9.jpg';
import galleryImage10 from '@/assets/images/gallery/gallery-1-10.jpg';

export const filterCategories = [
    { name: "All", filter: "filter-item" },
    { name: "Photography", filter: "photography" },
    { name: "Design", filter: "design" },
    { name: "Branding", filter: "branding" },
    { name: "Development", filter: "development" },
];



export const galleryFilterData = [
    {
        id: 1,
        src: galleryImage1,
        filterCategory: ["design"],
        col: 6,
        lg: 3
    },
    {
        id: 2,
        src: galleryImage2,
        filterCategory: ["photography"],
        col: 6,
        lg: 3
    },
    {
        id: 3,
        src: galleryImage3,
        filterCategory: ["design"],
        col: 6,
        lg: 3
    },
    {
        id: 4,
        src: galleryImage4,
        filterCategory: ["photography"],
        col: 6,
        lg: 3
    },
    {
        id: 5,
        src: galleryImage5,
        filterCategory: ["branding"],
        col: 6,
        lg: 3
    },
    {
        id: 6,
        src: galleryImage6,
        filterCategory: ["photography", "branding"],
        col: 6,
        lg: 3
    },
    {
        id: 7,
        src: galleryImage7,
        filterCategory: ["design"],
        col: 6,
        lg: 3
    },
    {
        id: 8,
        src: galleryImage8,
        filterCategory: ["development"],
        col: 6,
        lg: 3
    },

    {
        id: 9,
        src: galleryImage9,
        filterCategory: ["photography"],
        col: 6,
        lg: 6
    },
    {
        id: 10,
        src: galleryImage10,
        filterCategory: ["development"],
        col: 6,
        lg: 3
    },
];


