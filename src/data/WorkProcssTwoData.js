import workProcessBg from '@/assets/images/shapes/work-process-bg-2.png';
import workProcessImage1 from '@/assets/images/resources/work-process-2-1.jpg';
import workProcessImage2 from '@/assets/images/resources/work-process-2-2.jpg';
import workProcessImage3 from '@/assets/images/resources/work-process-2-3.jpg';
import workProcessImage4 from '@/assets/images/resources/work-process-2-4.jpg';

const workProcessTwoData = {
    bgImage: workProcessBg,
    tagLine: "Our Work Process",
    title: "Over The Solution Work Experiences",
    items: [
        {
            id: 1,
            title: "Creative Solutions",
            text: "Best of the Solution",
            image: workProcessImage1,
            delay: "00ms",
            reverse: false,
        },
        {
            id: 2,
            title: "Agency Business",
            text: "Best of the Solution",
            image: workProcessImage2,
            delay: "100ms",
            reverse: true,
        },
        {
            id: 3,
            title: "Data Network",
            text: "Best of the Solution",
            image: workProcessImage3,
            delay: "200ms",
            reverse: false,
        },
        {
            id: 4,
            title: "Cyber Security",
            text: "Best of the Solution",
            image: workProcessImage4,
            delay: "300ms",
            reverse: true,
        },
    ],
};

export default workProcessTwoData;
