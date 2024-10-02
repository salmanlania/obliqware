import bg from '@/assets/images/backgrounds/contact-bg-3.jpg'

const contactThreeData = {
    bg,

    tagLine: 'CONTACT US',
    title: 'Get In Touch \n Make an Appointment',

    form: {
        action: 'inc/sendemail.php',
        fields: [
            { name: 'name', type: 'text', placeholder: 'Your Name *' },
            { name: 'phone', type: 'text', placeholder: 'Your Phone' },
            { name: 'email', type: 'email', placeholder: 'Your Email *' },
            { name: 'subjects', type: 'text', placeholder: 'Your Subjects *' },
            {
                name: 'service',
                type: 'select',
                options: [
                    { value: '', label: 'Select Service', selected: true },
                    { value: '1', label: 'Website Development' },
                    { value: '2', label: 'App Development' },
                    { value: '3', label: 'IT Consultant' }
                ]
            },
            { name: 'message', type: 'textarea', placeholder: 'Your Message *' }
        ],
        submit: {
            text: 'Send Request',
            icon: 'tolak-icons-two-arrow-right-short'
        }
    },
    contactInfo: {
        icon: 'tolak-icons-two-phone-call',
        title: 'Get Contact Now',
        text: '+11234 751 328',
        href: '+11234751328',
        subHref: "tel"
    }
};

export default contactThreeData;
