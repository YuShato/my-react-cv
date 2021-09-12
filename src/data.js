import { FaFacebook, FaGithub, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const headerLinks = {
  home: 'Home',
  about: 'About',
  projects: 'Projects',
  contacts: 'Contacts'
}

const CourseData = [
  {
    id: 1,
    date: '2021, August',
    courseName: ' React. Development of complex fronted-applications.',
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/183/1474119.pdf?1631135872&_ga=2.181509410.447392469.1631110591-1299651872.1598336597',
    skill: 'React',
    company: 'HTMLACADEMY',
    imgSrc: './images/cert-5.jpg',
    duties: [
      'Building complex SPA applications',
      'React and Redux basics',
      'Optimizing the performance of React applications',
      'Testing applications with the Jest framework'
    ]
  },
  {
    id: 2,
    date: '2021, January',
    courseName: 'JavaScript. Architecture of Front-end Applications.',
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/175/1474119.pdf?1620771522&_ga=2.17937724.447392469.1631110591-1299651872.1598336597',
    skill: 'OOP JS',
    company: 'HTMLACADEMY',
    imgSrc: './images/cert-4.jpg',
    duties: [
      'Basic principles of OOP in Javascript',
      'Working with requests to the server',
      'Basics of MVP & MVC models'
    ]
  },
  {
    id: 3,
    date: '2020, September',
    courseName: 'JavaScript. Professional Development of Web Interfaces.',
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/173/1474119.pdf?1605685016&_ga=2.210941456.447392469.1631110591-1299651872.1598336597',
    skill: 'JavaScript',
    company: 'HTMLACADEMY',
    imgSrc: './images/cert-3.jpg',
    duties: [
      'Working with AJAX and requests',
      'Data structures and application performance',
      'Working with the DOM and building the right application structure'
    ]
  },
  {
    id: 4,
    date: '2020, July',
    courseName: 'HTML & CSS. Adaptive Website Coding and Automation.',
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/161/1474119.pdf?1599985167&_ga=2.215602450.447392469.1631110591-1299651872.1598336597',
    skill: 'Adaptive websites',
    company: 'HTMLACADEMY',
    imgSrc: './images/cert-2.jpg',
    duties: [
      'BEM methodology. Basic principles and benefits',
      'Working with Sass and Less processors',
      'Website responsiveness, mobile-first',
      'Using Gulp to Build a Web Page'
    ]
  },
  {
    id: 5,
    date: '2020, May',
    courseName: 'HTML & CSS. Professional Website Coding.',
    link:
      'https://assets.htmlacademy.ru/certificates/intensive/159/1474119.pdf?1599467864&_ga=2.251902348.447392469.1631110591-1299651872.1598336597',
    skill: 'HTML & CSS',
    company: 'HTMLACADEMY',
    imgSrc: './images/cert-1.jpg',
    duties: [
      'Principles of the semantic structure of the site',
      'Accessibility of web pages for screen-reader',
      'Work in Pixel perfect style'
    ]
  },
  {
    id: 6,
    date: ' 2019, August',
    courseName: 'Basics of HTML & CSS, Bootstrap3',
    link:
      'https://fructcode.com/ru/certificates/db70e4d52aa5f7cefc21b1af6303114c/en/',
    skill: 'Bootstrap 3',
    company: 'Fruct Code',
    imgSrc: './images/cert-0.jpg',
    duties: [
      'coding a website without a layout using Bootstrap 3',
      'general principles of web programming',
      'Basics of HTML & CSS'
    ]
  }
]

const aboutPageDescr = [
  ` I got into programming two years ago. At first it was a hobby, which
became my passion. In 2021 I graduated from HTML Academy as a React
developer. Training lasted 1 year.`,
  `During this time, I wrote 5 training projects. Now the number of
projects is much more. In parallel, I took courses on Udemy and
other educational platforms. My goal is to turn my hobby into a profession and become a frontend
developer.`,
  `The previous 7 years I worked as a transportation department
manager. It taught me time management, communication skills and
persistence. All these skills help me in learning programming. I believe that
soon my dream will become my profession.`
]

const AboutTabsDescr = ['Hello, I am Yuliya Shatokhina and I am a web developer. I live and work in Moscow.', 'I spend most of my day, experimenting with HTML, CSS, JavaScript and React. I enjoy coding and the challenge of learning something new everyday.', '  During 2020 and 2021, I took several programming courses. There is a list of completed courses and certifications.']


const SocialData = [
  {
    id: 1,
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/shatoyu/',
    name: 'Facebook'
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: 'https://github.com/YuShato',
    name: 'Github'
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link:
      'https://api.whatsapp.com/send?phone=79265516821&text=Hi%20Yuliya!%20',
    name: 'Whatsapp'
  },
  {
    id: 4,
    icon: <FaPhoneAlt />,
    link: 'tel:+79265516821',
    name: 'Tel. number +79265516821 '
  }
]

const ProjectData = [
  {
    id: 1,
    imgSrc: './images/project-1.jpg',
    alt: 'dom predkov project',
    title: 'Dom Predkov',
    programs: 'HTML, CSS, JS',
    deployLink: 'https://dompredkov.netlify.app/main.html',
    descr: 'Multi-page site for genealogy services. I performed design, layout, filling with content',
    sourceCode: 'https://github.com/YuShato/dompredkov',
  },
  {
    id: 2,
    imgSrc: './images/project-2.jpg',
    alt: 'six cities project',
    title: 'Six cities',
    programs: 'React, Redux, Axios',
    deployLink: 'https://six-cities-react-app.netlify.app/',
    descr: 'Course project. React application for finding housing in 6 different cities.',
    sourceCode: 'https://github.com/YuShato/1474119-six-cities-7',
  },
  {
    id: 3,
    imgSrc: './images/project-3.jpg',
    alt: 'sedona project',
    title: 'Sedona',
    programs: 'HTML, CSS, JS, Sass, Pixel Perfect',
    deployLink: 'https://sedona-yushato.netlify.app/',
    descr: 'Course project. Responsive website for advertising the tourist city of Sedona. I did layout and js scripts.',
    sourceCode: 'https://github.com/YuShato/1474119-sedona-20',
  },
  {
    id: 4,
    imgSrc: './images/project-4.jpg',
    alt: 'keksobooking project',
    title: 'Keksobooking',
    programs: 'JavaScript',
    deployLink: 'https://yushato.github.io/1474119-keksobooking-21/',
    descr: 'Course project. The wanderer for finding and placing housing in Tokyo.',
    sourceCode: 'https://github.com/YuShato/1474119-keksobooking-21',
  },
  {
    id: 5,
    imgSrc: './images/project-5.jpg',
    alt: 'calories counter project',
    title: 'Calories Counter',
    programs: 'JavaScript',
    deployLink: 'https://yushato.github.io/calories-counter-JS/',
    descr: 'Vanilla JS Single Page Calorie Counting Application.',
    sourceCode: 'https://github.com/YuShato/calories-counter-JS',
  },
  {
    id: 6,
    imgSrc: './images/project-6.jpg',
    alt: 'gllacy shop project',
    title: 'Gllacy Shop',
    programs: 'HTML, CSS, Pixel Perfect',
    deployLink: 'https://yushato.github.io/1474119-gllacy-28/',
    descr: 'My first page built with HTML & CSS (not responsive, PixelPerfect).',
    sourceCode: 'https://github.com/YuShato/1474119-gllacy-28',
  },
  {
    id: 7,
    imgSrc: './images/project-7.jpg',
    alt: 'bootstrap 5 site project',
    title: 'Education course',
    programs: 'HTML, CSS, Bootstrap 5',
    deployLink: 'https://education-course-bootstrap.netlify.app/',
    descr: 'A site written in 2 hours of work. Using Bootstrap5. No initial design, only Bootstrap Styles',
    sourceCode: 'https://github.com/YuShato/site-bootstrap-5',
  },
  {
    id: 8,
    imgSrc: './images/project-8.jpg',
    alt: 'react quiz game',
    title: 'React quiz game',
    programs: 'React',
    deployLink: 'https://quiz-game-react-app.netlify.app/',
    descr: 'Single Page React Application with API Request. Quiz-game with the ability to choose a topic and the number of questions.',
    sourceCode: 'https://github.com/YuShato/react-practice-john-smilga-course/tree/master/23-quiz',
  },
  {
    id: 9,
    imgSrc: './images/project-9.jpg',
    alt: 'react hacker news',
    title: 'React Hacker News',
    programs: 'React',
    deployLink: 'https://hacker-news-react-app-yushato.netlify.app/',
    descr: 'React application for finding IT news.',
    sourceCode: 'https://github.com/YuShato/react-practice-john-smilga-course/tree/master/22-hacker-news',
  },{
    id: 10,
    imgSrc: './images/project-10.jpg',
    alt: 'Movie DB',
    title: 'Movie DB App',
    programs: 'React',
    deployLink: 'https://movie-db-search-react-app.netlify.app/',
    descr: 'Online movie search. Single Page React Application with API Request.',
    sourceCode: 'https://github.com/YuShato/react-practice-john-smilga-course/tree/master/21-movie-db',
  },{
    id: 11,
    imgSrc: './images/project-11.jpg',
    alt: 'stock photos app',
    title: 'Stock Photos',
    programs: 'React',
    deployLink: 'https://stock-phptos-react-app.netlify.app/',
    descr: 'Search for stock photos by any custom request. Use of API.',
    sourceCode: 'https://github.com/YuShato/react-practice-john-smilga-course/tree/master/19-stock-photos',
  },{
    id: 12,
    imgSrc: './images/project-12.jpg',
    alt: 'coctails react  app',
    title: 'Coctails',
    programs: 'React',
    deployLink: 'https://coctails-react-app.netlify.app/',
    descr: 'Cocktail search page. You can search by name or ingredients. React application using API',
    sourceCode: 'https://github.com/YuShato/react-practice-john-smilga-course/tree/master/15-coctails',
  },
]

const ProjectsDescription = [`These are my major projects for 2020-2021.`, `By clicking on the picture you can go to the page with published
version of the project.`, `The page will open in a new tab.`]

export {
  headerLinks,
  CourseData,
  SocialData,
  ProjectData,
  aboutPageDescr,
  ProjectsDescription,
  AboutTabsDescr
}
