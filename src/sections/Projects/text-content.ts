import CalendarImg from 'assets/projects-images/calendar.png';
import QuizImg from 'assets/projects-images/quiz.png';
import MoneyImg from 'assets/projects-images/dtmoney.png';
import ResfishImg from 'assets/projects-images/resfish.png';

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
        title: 'Resfish App',
        description:
          'Software para pesqueiros, restaurantes e padarias com sistema de comandas, fechamento de caixas, controle de estoque e uma seção onde a cozinha recebe em tempo real os pratos a serem preparados.',
        tags: [
          'React',
          'Next.js',
          'TypeScript',
          'ChakraUI',
          'Socket.io',
          'MongoDB',
          'Node.js',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/resfish-app',
        projectURL: '',
        imageSrc: ResfishImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Quiz Game',
        description:
          'Um quiz multijogador onde existem diversas salas de perguntas e os participantes podem competir entre si.',
        tags: ['React', 'TypeScript', 'Socket.io', 'Prisma', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/quiz-game',
        projectURL: '',
        imageSrc: QuizImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Calendar App',
        description:
          'Um calendário onde é possível definir tarefas a serem feitas.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: '',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Dtmoney',
        description:
          'Uma aplicação para controle pessoal de transações financeiras.',
        tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
        githubURL: 'https://github.com/bryanmaraujo544/dtmoney',
        projectURL: '',
        imageSrc: MoneyImg,
      },
    ],
  },
  en: {
    title: 'Projects',
    seeMoreButton: 'See more projects',
    projects: [
      {
        uptitle: 'Full-Stack Project',
        title: 'Resfish App',
        description:
          'Software for fishing, restaurants and bakeries with a orders system, closing cashiers, stock control and a section where the kitchen receives the dishes to be prepared in real time.',
        tags: [
          'React',
          'Next.js',
          'TypeScript',
          'ChakraUI',
          'Socket.io',
          'MongoDB',
          'Node.js',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/resfish-app',
        projectURL: '',
        imageSrc: ResfishImg,
      },
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
        projectURL: '',
        imageSrc: QuizImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Calendar App',
        description:
          'A calendar where the user can assign tasks to be completed on some date.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: '',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Dtmoney',
        description: 'An application to manage personal money transactions.',
        tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
        githubURL: 'https://github.com/bryanmaraujo544/dtmoney',
        projectURL: '',
        imageSrc: MoneyImg,
      },
    ],
  },
};

export default textContent;
