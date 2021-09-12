const MAX_PROJECTS_LENGTH = 7

  const CODEWARS_URL = 'https://www.codewars.com/api/v1/users/YuShato'

const FrontendSkill = [
  {
    skillName: 'React',
    qualification: 50
  },
  {
    skillName: 'Javascript',
    qualification: 70
  },
  {
    skillName: 'HTML/CSS',
    qualification: 80
  }
]
const OtherSkill = [
  {
    skillName: 'Git',
    qualification: 50
  },
  {
    skillName: 'Figma',
    qualification: 70
  },
  {
    skillName: 'Bootstrap',
    qualification: 80
  }
]

const AppRoute = {
  MAIN: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
}

const HeaderLinks = [
  {
    id: 1,
    link: AppRoute.MAIN,
    description: 'home'
  },
  {
    id: 2,
    link: AppRoute.ABOUT,
    description: 'about'
  },
  {
    id: 3,
    link: AppRoute.PROJECTS,
    description: 'projects'
  },
  {
    id: 4,
    link: AppRoute.CONTACT,
    description: 'contact'
  }
]

export {
  FrontendSkill,
  OtherSkill,
  AppRoute,
  HeaderLinks,
  MAX_PROJECTS_LENGTH,
  CODEWARS_URL
}
