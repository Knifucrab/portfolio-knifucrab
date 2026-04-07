import petsion2 from '../assets/projects/petsion2.webp';
import petsion3 from '../assets/projects/petsion3.webp';
import petsion4 from '../assets/projects/petsion4.webp';
import petsion5 from '../assets/projects/petsion5.webp';
import petsion6 from '../assets/projects/petsion6.webp';
import petsion7 from '../assets/projects/petsion7.webp';
import petsion8 from '../assets/projects/petsion8.webp';
import outfy1 from '../assets/projects/outfy1.webp';
import outfy2 from '../assets/projects/outfy2.webp';
import outfy3 from '../assets/projects/outfy3.webp';
import ldt1 from '../assets/projects/ldt1.webp';
import ldt2 from '../assets/projects/ldt2.webp';
import ldt3 from '../assets/projects/ldt3.webp';
import ldt4 from '../assets/projects/ldt4.webp';
import zento1 from '../assets/projects/zento1.webp';
import zento2 from '../assets/projects/zento2.webp';
import lunaro_1 from '../assets/projects/lunaro_wallet_1.webp';
import lunaro_2 from '../assets/projects/lunaro_wallet_2.webp';
import lunaro_3 from '../assets/projects/lunaro_wallet_3.webp';
import aizora_1 from '../assets/projects/aizora_1.png';
import aizora_2 from '../assets/projects/aizora_2.png';
import aizora_3 from '../assets/projects/aizora_3.png';
import aizora_4 from '../assets/projects/aizora_4.png';
import aizora_5 from '../assets/projects/aizora_5.png';
import aizora_6 from '../assets/projects/aizora_6.png';
import unstaLogo from '../assets/unsta.png';
import utnLogo from '../assets/utn.png';
import rollingCodeLogo from '../assets/rolling_code.png';
import udemyLogo from '../assets/udemy.png';
import truckersTalentLogo from '../assets/truckers_talent_logo.jpg';
import visionApostolicaLogo from '../assets/visionapostolica_logo.ico';
import aizoraLogo from '../assets/aizora_logo.jpg';
import solidLogo from '../assets/solidfi_logo.jpg';
import petsionLogo from '../assets/petsion_logo.ico';

export const HERO_CONTENT = `Full Stack Developer with hands-on experience building and maintaining web applications using React, Node.js, Express, and SQL/NoSQL databases. Software Development and Quality Assurance Technician from San Miguel de Tucuman, Argentina 🇦🇷, with practical experience in agile teams (SCRUM), feature-driven development, production support, and incident resolution. Currently focused on growing in backend, data, process automation, and enterprise solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'November 2025 - Present',
    role: 'Full-Stack Developer & DevOps',
    company: 'Truckers Talent Inc',
    companyLink: 'https://www.truckerstalent.com',
    companyLogo: truckersTalentLogo,
    description:
      'Designed and implemented backend and frontend features for a production platform. Built Stripe payment integrations including subscriptions, webhooks, state validation, and error handling. Implemented a complete affiliate system with business logic, tracking, and commissions. Contributed to infrastructure and deployments on DigitalOcean, worked with a modular architecture and REST APIs, and handled release operations including PR reviews/merges, production deploys, post-release monitoring, weekly hotfixes, and incident response.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'REST APIs',
      'Stripe',
      'DigitalOcean',
      'Git',
      'CI/CD',
      'PostgreSQL',
    ],
  },
  {
    year: 'March 2025 - April 2025',
    role: 'Full Stack Freelance Developer',
    company: 'Institutional Web Freelance Client',
    companyLink: 'https://visionapostolicaldt.vercel.app',
    companyLogo: visionApostolicaLogo,
    description:
      'Built an institutional landing page and contributed to administrative flow planning based on client requirements. Designed user-friendly solutions focused on content management and easy administration.',
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind',
      'EmailJS',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    year: 'February 2026 - April 2026',
    role: 'Full Stack Freelance Developer',
    company: 'Institutional Web Freelance Client',
    companyLink: 'https://dashboard-ldt-front.vercel.app',
    companyLogo: visionApostolicaLogo,
    description:
      'Built a Trello-style administrative dashboard adapted to the client workflow. Implemented integrations for content and file management, and collaborated on data modeling and system structure for administrative operations.',
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind',
      'EmailJS',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    year: 'April 2025 - May 2025',
    role: 'Full Stack Developer',
    company: 'Aizora Landing Page',
    companyLink: 'https://aizora.io',
    companyLogo: aizoraLogo,
    description:
      'Built a marketing landing page with Calendly integration for booking meetings, 3D mobile mockups, dynamic language display based on the user country, and WhatsApp integration. Worked hand-in-hand with a UI designer to deliver a polished and conversion-focused experience.',
    technologies: [
      'React',
      'JavaScript',
      'Calendly',
      'WhatsApp API',
      'Vercel',
      'Responsive Design',
    ],
  },
  {
    year: 'August 2024 - November 2024 (3 months)',
    role: 'Front End Engineering Intern',
    company: 'Solid',
    companyLogo: solidLogo,
    description:
      'Developed interfaces with React, TypeScript, and Next.js. Built reusable and responsive components, worked with Tailwind CSS and Material UI, and consumed APIs in a collaborative engineering environment.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'GitHub Actions',
      'Material UI (MUI)',
      'Recharts',
      'Axios',
      'Cypress',
    ],
  },
  {
    year: 'March 2024 - August 2024 (6 months)',
    role: 'Front End Developer',
    company: 'Petsion (Final University Project)',
    companyLink: 'https://petsion-front.vercel.app',
    companyLogo: petsionLogo,
    description:
      'Collaborated in an agile team for a real-world university capstone project. Developed user-facing features, integrated REST APIs, and contributed to incremental product improvements.',
    technologies: [
      'React',
      'Bootstrap',
      'Redux',
      'MongoDB',
      'Express',
      'SCRUM',
      'REST APIs',
    ],
  },
];

export const REACT_NATIVE_PROJECTS = [
  {
    title: 'Zento - Money Manager App',
    githubLink: 'https://github.com/Knifucrab/zento-app',
    figmaLink:
      'https://www.figma.com/design/0LZABrv6gQqOyyO9pZUvss/Zento?node-id=0-1&m=dev&t=y3twHhQoNC8RIdHe-1',
    media: [
      { type: 'image', src: zento1 },
      { type: 'image', src: zento2 },
      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
    description:
      'Personal finance app built from scratch to help users track their expenses, incomes, and debts through a clean and intuitive UI. Developed without Expo using React Native CLI, TypeScript, and Redux, with offline data storage via AsyncStorage and rich animations powered by Lottie. Includes light in-app monetization using AdMob.The app is planned to be published on Google Play Store and Apple App Store in Q3 2025.',
    technologies: [
      'React Native CLI',
      'Typescript',
      'AsyncStorage',
      'AdMob',
      'Lottie',
      'Redux',
      'React Navigation',
      'Tamagui UI',
    ],
  },
  {
    title: 'Outfy App - Social Media for Outfits',
    githubLink: 'https://github.com/Knifucrab/outfy-app',
    media: [
      {
        type: 'video',
        src: 'https://youtube.com/embed/LPcqCf6J4gw?si=FKRtI5K1bokXGGMF',
      },
      { type: 'image', src: outfy1 },
      { type: 'image', src: outfy2 },
      { type: 'image', src: outfy3 },
      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
    description:
      'Created for everyone who is appasionated for the clothes and the styling being able to share his outfits. Created from scratch using React Native, Expo, Express and MongoDB',
    technologies: ['React Native', 'Expo', 'Express', 'MongoDB', 'Redux'],
  },
];

export const REACT_PROJECTS = [
  {
    title: 'Petsion - Petcare App',
    githubLink: 'https://github.com/JVolkK/Petsion',
    previewLink: 'https://www.petsion.com.ar',
    year: 'March 2024 - August 2024',
    role: 'Front End Developer',
    company: 'Petsion',
    media: [
      { type: 'image', src: petsion2 },
      { type: 'image', src: petsion3 },
      { type: 'image', src: petsion4 },
      { type: 'image', src: petsion5 },
      { type: 'image', src: petsion6 },
      { type: 'image', src: petsion7 },
      { type: 'image', src: petsion8 },
      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
    description:
      'Allow everyone to be a pet sitter or hire a pet sitter. Enabling over 100 users to manage their services. +500 pets loaded. Created from cero using React, Express and MongoDB.',
    technologies: ['HTML', 'CSS', 'React', 'MongoDB', 'Redux'],
  },
  {
    title: 'Aizora - IA Automation Software Service',
    githubLink: 'https://github.com/Knifucrab/aizora-web',
    previewLink: 'https://www.aizora.io',
    year: 'August 2025 - Present',
    role: 'Full-Stack Developer (Automation-Focused)',
    company: 'Aizora',
    media: [
      { type: 'image', src: aizora_1 },
      { type: 'image', src: aizora_2 },
      { type: 'image', src: aizora_3 },
      { type: 'image', src: aizora_4 },
      { type: 'image', src: aizora_5 },
      { type: 'image', src: aizora_6 },
      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
  },
  {
    title: 'Church Vision Apostolica Lomas de Tafí',
    previewLink: 'https://visionapostolicaldt.vercel.app/',
    year: 'May 2025 - June 2025',
    role: 'Front End Developer',
    company: 'Iglesia Vision Apostolica Lomas de Tafí',
    figmaLink:
      'https://www.figma.com/proto/GQ8kXvJTgXvUoPIx0ZutYj/Iglesia-Vision-Apostolica-Landing?node-id=0-1&t=kjQso6ke1JkWD8rZ-1',
    media: [
      { type: 'image', src: ldt1 },
      { type: 'image', src: ldt2 },
      { type: 'image', src: ldt3 },
      { type: 'image', src: ldt4 },

      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
  },
  {
    title: 'Lunaro Wallet - Crypto Wallet App',
    previewLink: 'https://lunaro-wallet.vercel.app',
    company: 'Freelance',
    media: [
      { type: 'image', src: lunaro_1 },
      { type: 'image', src: lunaro_2 },
      { type: 'image', src: lunaro_3 },
    ],
    description:
      'A full-featured crypto wallet app that allows users to securely store, manage, and trade their cryptocurrencies. Integrates etherscan API to provide real-time market data, transaction history, and portfolio tracking. Includes coingecko API to provide users with up-to-date information on cryptocurrency prices, market trends, and news. Also wallet charts to visualize portfolio performance over time.',
    technologies: ['TypeScript', 'React', 'Material UI', 'RainbowKit', 'Wagmi'],
  },
];

export const EDUCATION = [
  {
    title: 'Software Development and Quality Assurance Technician',
    institution: 'Universidad Santo Tomas de Aquino',
    period: '2022 - 2024',
    logoAlt: 'Universidad Santo Tomas de Aquino logo',
    logo: unstaLogo,
  },
  {
    title: 'Logistics Technician Program',
    institution: 'Higher Education Program',
    period: '2026 - 2028',
    logoAlt: 'Logistics program institution logo',
    logo: utnLogo,
  },
  {
    title: 'Full Stack Web Developer Program',
    institution: 'Rolling Code',
    period: 'Completed',
    logoAlt: 'Rolling Code logo',
    logo: rollingCodeLogo,
  },
  {
    title: 'React Native Course',
    institution: 'Udemy',
    period: 'Completed',
    logoAlt: 'Udemy logo',
    logo: udemyLogo,
  },
];

export const CONTACT = {
  email: 'maurosbringas@gmail.com',
  phoneNo: '+54 9 3815904854',
};
