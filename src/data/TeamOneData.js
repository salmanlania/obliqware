import image1 from '@/assets/images/team/user.png'
import image2 from '@/assets/images/team/user.png'
import image3 from '@/assets/images/team/user.png'
import image4 from '@/assets/images/team/user.png'
import image5 from '@/assets/images/team/user.png'
import image6 from '@/assets/images/team/user.png'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const teamOneData = {
    tagLine: "Our Team Member",
    title: "Meet Great Customer Service",
    title2: "Meet The Team Metting Solution",
    carouselData: [
        {
            id: 1,
            image: image1,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com/salmanlania", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://linkedin.com/in/salmanlania", name: "Linkedin" },
                { id: 3, icon: faTwitter, link: "https://twitter.com/salmanlania", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com/salmanlania", name: "Instagram" },
            ], title: "Salman Lania",
            href: "team",
            designation: "Founder & Lead Developer"


        },
        {
            id: 2,
            image: image2,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://linkedin.com", name: "LinkedIn" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Michael Roberts",
            href: "team",
            designation: "Project Manager"


        },
        {
            id: 3,
            image: image3,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://linkedin.com", name: "LinkedIn" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Muhammad Aamir",
            href: "team",
            designation: "Backend Developer"


        },
        {
            id: 4,
            image: image4,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://www.linkedin.com/in/muhammad-umair-32117a223/", name: "LinkedIn" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Muhammad Umair",
            href: "team",
            designation: "Senior UI/UX Designer & Graphics Designer"


        },
        {
            id: 5,
            image: image5,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://linkedin.com", name: "LinkedIn" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "David Copers",
            href: "team",
            designation: "Business Developer"


        },
        {
            id: 6,
            image: image6,
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faLinkedin, link: "https://linkedin.com", name: "LinkedIn" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ], title: "Ali Raza",
            href: "team",
            designation: "Ai Engineer & Data Scientist"


        }
    ]


}
export default teamOneData;