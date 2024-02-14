export interface ProjectInterface {
  title: string,
  description: string,
  tecnologies: string[],
  image: string,
  github: string,
  demo: string
}

export const data: ProjectInterface[] = [
  {
    title: 'Todo App',
    description: 'Todo App that helps users to organize them things.\n\nSave the user data in the localStorage. This app uses hooks such as useState, useEffect and useReducer, also the app is responsive.',
    tecnologies: ['React', 'Tailwind Css'],
    image: './project1.png',
    github: 'https://github.com/SebasMorales1/react-todo',
    demo: 'https://todoreact-sebastian-morales.netlify.app/'
  }
]