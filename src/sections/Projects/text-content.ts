import CalendarImg from 'assets/projects-images/calendar.png';
import KanbanImg from 'assets/projects-images/kanban.png';
import QuizImg from 'assets/projects-images/quiz.png';
// import WeatherImg from 'assets/projects-images/weather.png';
import MoneyImg from 'assets/projects-images/dtmoney.png';

interface Project {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
}

interface Data {
  title: string;
  seeMoreButton: string;
  projects: Project[];
}

interface Projects {
  pt: Data;
  en: Data;
}

const textContent: Projects = {
  pt: {
    title: 'Projetos',
    seeMoreButton: 'Ver mais projetos',
    projects: [
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Quiz Game',
        description:
          'Um quiz multijogador onde existem diversas salas de perguntas e os participantes podem competir entre si.',
        tags: [
          'React',
          'TypeScript',
          'TypeScript',
          'Socket.io',
          'Prisma',
          'MySQL',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/quiz-game',
        projectURL: 'https://simple-quiz-iota.vercel.app/',
        imageSrc: QuizImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Calendar App',
        description:
          'Um calendário onde é possível definir tarefas a serem feitas.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Kanban App',
        description:
          'Um quadro de tarefas onde os usuários conseguem adicionar tarefas, arrastá-las entre colunas e acessar quadros de outros usuários',
        tags: [
          'React',
          'Node.js',
          'TypeScript',
          'JWT',
          'Prisma',
          "Drag'n Drop",
        ],
        githubURL: 'https://github.com/bryanmaraujo544/kanban-app',
        projectURL: 'https://kanban-app-cyan.vercel.app/',
        imageSrc: KanbanImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Dtmoney',
        description:
          'Uma aplicação para controle pessoal de transações financeiras.',
        tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
        githubURL: 'https://github.com/bryanmaraujo544/dtmoney',
        projectURL: 'https://dtmoney-two-hazel.vercel.app',
        imageSrc: MoneyImg,
      },

      // {
      //   uptitle: 'Projeto Front-End',
      //   title: 'Weather App',
      //   description:
      // eslint-disable-next-line max-len
      //     'Uma aplicação onde é possível o usuário inserir o nome de uma cidade do mundo receber as informações climáticas do momento e da semana.',
      //   tags: ['React', 'TypeScript'],
      //   githubURL: 'https://github.com/bryanmaraujo544/weather-app',
      //   projectURL: 'https://weather-app-plum-nine.vercel.app/',
      //   imageSrc: WeatherImg,
      // },
    ],
  },
  en: {
    title: 'Projects',
    seeMoreButton: 'See more projects',
    projects: [
      {
        uptitle: 'Full-Stack Project',
        title: 'Quiz Game',
        description:
          'A real-time multiplayer quiz game, where there are different rooms and the users can compete with each other.',
        tags: [
          'React',
          'TypeScript',
          'TypeScript',
          'Socket.io',
          'Prisma',
          'MySQL',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/quiz-game',
        projectURL: 'https://simple-quiz-iota.vercel.app/',
        imageSrc: QuizImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Calendar App',
        description:
          'A calendar where the user can assign tasks to be completed on some date.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Kanban App',
        description:
          'Each user has its own task board with fully editable columns and tasks. And the users can invite and get invited to board of other users',
        tags: [
          'React',
          'Node.js',
          'TypeScript',
          'JWT',
          'Prisma',
          "Drag'n Drop",
        ],
        githubURL: 'https://github.com/bryanmaraujo544/kanban-app',
        projectURL: 'https://kanban-app-cyan.vercel.app/',
        imageSrc: KanbanImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Dtmoney',
        description: 'An application to manage personal money transactions.',
        tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
        githubURL: 'https://github.com/bryanmaraujo544/dtmoney',
        projectURL: 'https://dtmoney-two-hazel.vercel.app',
        imageSrc: MoneyImg,
      },
    ],
  },
};

export default textContent;
