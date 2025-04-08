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

export const HERO_CONTENT = `React Native Mobile Developer. Software & Quality Development Technician from Tucuman, Argentina 🇦🇷. Specialized in the development of multiplatform mobile aplications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: '2023 - Present',
    role: 'Senior Full Stack Developer',
    company: 'Google Inc.',
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  },
  {
    year: '2022 - 2023',
    role: 'Frontend Developer',
    company: 'Adobe',
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
  },
  {
    year: '2021 - 2022',
    role: 'Full Stack Developer',
    company: 'Facebook',
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
  },
  {
    year: '2020 - 2021',
    role: 'Software Engineer',
    company: 'Paypal',
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
  },
];

export const REACT_NATIVE_PROJECTS = [
  {
    title: 'Outfy App',
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
    previewLink: 'https://www.visionapostolicaldt.org',
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

export const CONTACT = {
  phoneNo: '+54 381 5904854 ',
  email: 'maurosbringas@gmail.com',
};
