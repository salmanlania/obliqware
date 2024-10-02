import image from '@/assets/images/products/product-d-1-1.jpg'
import avater1 from '@/assets/images/products/product-c-1-1.jpg'
import avater2 from '@/assets/images/products/product-c-1-2.jpg'
export const productsDetailsData = {
    image: image,
    title: 'Office Chair',
    price: 78.00,
    reviewsCount: 2,
    reviewStars: 5,
    excerptText1: 'Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.',
    excerptText2: 'REF. 4231/406\nAvailable in store',
    description: {
        title: 'Description',
        text: 'Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrang hidden in the middle of text.',
        list: [
            'Nam at elit nec neque suscipit gravida.',
            'Aenean egestas orci eu maximus tincidunt.',
            'Curabitur vel turpis id tellus cursus laoreet.'
        ]
    },
    comments: [
        {
            id: 1,
            author: 'Kevin Martin',
            date: '20 June, 2023',
            time: '4:00 pm',
            rating: 5,
            text: 'It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim.',
            avatar: avater1
        },
        {
            id: 2,
            author: 'Sarah Albert',
            date: '20 June, 2023',
            time: '4:00 pm',
            rating: 5,
            text: 'It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim.',
            avatar: avater2
        }
    ],
    socialLinks: [
        { name: 'Facebook', href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
        { name: 'Pinterest', href: 'https://pinterest.com', icon: 'fab fa-pinterest-p' },
        { name: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
        { name: 'Instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' }
    ]
};
