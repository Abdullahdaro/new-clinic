import wp from '../../public/assets/wp.png';
import wptr from '../../public/assets/wptr.png';
import wpfr from '../../public/assets/wpfr.png';

import r1 from '../../public/assets/r1.jpg'
import r2 from '../../public/assets/r2.jpg'
import r3 from '../../public/assets/r3.jpg'
import r4 from '../../public/assets/r4.jpg'
import r5 from '../../public/assets/r5.jpg'
import r6 from '../../public/assets/r6.jpg'
import r7 from '../../public/assets/r7.jpg'

import rt1 from '../../public/assets/rt1.jpg'
import rt2 from '../../public/assets/rt2.jpg'
import rt3 from '../../public/assets/rt3.jpg'
import rt4 from '../../public/assets/rt4.jpg'
import rt5 from '../../public/assets/rt5.jpg'
import rt6 from '../../public/assets/rt6.jpg'
import rt7 from '../../public/assets/rt7.jpg'
import rt8 from '../../public/assets/rt8.jpg'


const teethContent ={
    en: {
        first: "Before & After",
        second: "Reviews",
        third: 'Expriences',
        fourth: 'Clinic',
        wp: wp,
        wpl: "https://api.whatsapp.com/send?phone=905308309219",

        reviews: [
            {  
                src: r1,
                alt: 'r1'
                },  
                {
                src: r2,
                alt: 'r2'
                },
                {
                src: r3,
                alt: 'r3'
                },
                {
                src: r4,
                alt: 'r4'
                },
                {
                src: r5,
                alt: 'r5'
                },
                {
                src: r6,
                alt: 'r6'
                },
                {
                src: r7,
                alt: 'r7'
                }
        ],

        videos : [
            {
                src: 'https://www.youtube.com/embed/BSym9MghlA8'
            },
            {
                src: 'https://www.youtube.com/embed/PvgHhgQ_JMg'
            },
            {
                src: 'https://www.youtube.com/embed/kvSS2R1zM8k'
            },
            {
                src: 'https://www.youtube.com/embed/ETW4B1q1MyY'
            },
            {
                src: "https://www.youtube.com/embed/EdPgH7Tb9jQ"
            }

        ]
    },

    tr: {
        first: "Önce & Sonra",
        second: "Yorumlar",
        third: 'Deneyim',
        fourth: 'Klinik',
        wp: wptr,
        wpl: "https://api.whatsapp.com/send?phone=905398289219",

        reviews: [
            {
                src: rt1,
                alt: 'rt1'
            },
            {
            src: rt2,
            alt: 'rt2'
            },
            {
            src: rt3,
            alt: 'rt3'
            },
            {
            src: rt4,
            alt: 'rt4'
            },
            {
            src: rt5,
            alt: 'rt5'
            },
            {
            src: rt6,
            alt: 'rt6'
            },
            {
            src: rt7,
            alt: 'rt7'
            }
        ],

        videos : [
            {
                src: 'https://www.youtube.com/embed/R6aHQQIotMA'
            },
            {
                src: 'https://www.youtube.com/embed/DX3IeD4ML-M'
            },
            {
                src: 'https://www.youtube.com/embed/3LDNRMAqNcE'
            },
            {
                src: 'https://www.youtube.com/embed/RN1tu90FKis'
            },
            {
                src: 'https://youtube.com/embed/EdPgH7Tb9jQ?feature=share'
            }
        ],
    },

    fr: {
        first: "Avant & Après",
        second: "Reveus",
        third: 'Expériences',
        fourth: 'Clinique',
        wp: wpfr,
        wpl: "https://api.whatsapp.com/send?phone=905308309219",

        reviews: [
            {  
                src: r1,
                alt: 'r1'
                },  
                {
                src: r2,
                alt: 'r2'
                },
                {
                src: r3,
                alt: 'r3'
                },
                {
                src: r4,
                alt: 'r4'
                },
                {
                src: r5,
                alt: 'r5'
                },
                {
                src: r6,
                alt: 'r6'
                },
                {
                src: r7,
                alt: 'r7'
                }
        ],

        videos : [
            {
                src: 'https://www.youtube.com/embed/BSym9MghlA8'
            },
            {
                src: 'https://www.youtube.com/embed/PvgHhgQ_JMg'
            },
            {
                src: 'https://www.youtube.com/embed/kvSS2R1zM8k'
            },
            {
                src: 'https://www.youtube.com/embed/ETW4B1q1MyY'
            },
            {
                src: "https://www.youtube.com/embed/EdPgH7Tb9jQ"
            }
        ]
    }
}

export default teethContent;