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
import flights_1 from '../assets/projects/flights_1.webp';
import flights_2 from '../assets/projects/flights_2.webp';
import flights_3 from '../assets/projects/flights_3.webp';
import flights_4 from '../assets/projects/flights_4.webp';

export const HERO_CONTENT = `React Native Mobile Developer. Software & Quality Development Technician from Tucuman, Argentina 🇦🇷. Specialized in the development of multiplatform mobile aplications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'March 2024 - August 2024 (6 months)',
    role: 'Front End Developer',
    company: 'Petsion (Final University Project)',
    description: `Collaborated in a team project as part of my final university coursework, with professors from multinational companies acting as real-world clients.`,
    technologies: [
      'React',
      'Bootstrap',
      'Redux',
      'mongoDB',
      'Express',
      'SCRUM',
      'REST API',
    ],
  },
  {
    year: 'August 2024 - Present',
    role: 'Freelance Frontend Developer',
    company: 'Church Vision Apostolica - Lomas de Tafí',
    description: `Designed and developed a responsive one-page website for a local church to showcase their beliefs, events, and image gallery.`,
    technologies: [
      'React',
      'Ant Design',
      'Figma',
      'Vercel',
      'Google Cloud Services',
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

export const REACT_EXPERIENCE = [
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
    description:
      'Allow everyone to be a pet sitter or hire a pet sitter. Enabling over 100 users to manage their services. +500 pets loaded. Created from cero using React, Express and MongoDB.',
    technologies: ['HTML', 'CSS', 'React', 'MongoDB', 'Redux'],
  },
];

export const REACT_PROJECTS = [
  {
    title: 'Google Flights Clone',
    previewLink: 'https://google-flights-clone-olive.vercel.app',
    company: 'Freelance',
    media: [
      { type: 'image', src: flights_1 },
      { type: 'image', src: flights_2 },
      { type: 'image', src: flights_3 },
      { type: 'image', src: flights_4 },
      // { type: 'video', src: 'https://www.youtube.com/embed/exampleVideoID' },
    ],
    description:
      'A full-featured flight search and reservation web app inspired by Google Flights. Integrates with a public flights API to provide real-time flight data, booking capabilities, and personalized recommendations. Includes advanced filtering options to help users find the best deals and save money on flights, as well as suggestions for alternative dates and routes.',
    technologies: ['HTML', 'CSS', 'React', 'MongoDB', 'Redux', 'REST'],
  },
];

export const CONTACT = {
  phoneNo: '+54 381 5904854 ',
  email: 'maurosbringas@gmail.com',
};
