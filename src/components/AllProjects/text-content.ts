import WeekPlannerImg from 'assets/projects-images/week-planner.png';
import DevWorldImg from 'assets/projects-images/dev-world.png';
import PomodoroImg from 'assets/projects-images/pomodoro.png';
import WeatherImg from 'assets/projects-images/weather.png';
import CalendarImg from 'assets/projects-images/calendar.png';
import KanbanImg from 'assets/projects-images/kanban.png';
import QuizImg from 'assets/projects-images/quiz.png';
import ImCodeImg from 'assets/projects-images/imcode-landing.png';
import RestaurantImg from 'assets/projects-images/restaurant-app.png';
import MoneyImg from 'assets/projects-images/dtmoney.png';
import EventImg from 'assets/projects-images/event-platform.png';
import ResfishImg from 'assets/projects-images/resfish.png';
import IgnewsImg from 'assets/projects-images/ignews.png';

interface Project {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
  date: any;
  complexity: 1 | 2 | 3;
}

interface Data {
  title: string;
  inputPlaceholder: string;
  projects: Project[];
  orderButton: string;
  filterButton: string;
  filters: string[];
  orderOptions: string[];
  resultsText: string;
}

interface Projects {
  pt: Data;
  en: Data;
}

const textContent: Projects = {
  pt: {
    title: 'Projetos',
    inputPlaceholder: 'Encontre um projeto...',
    orderButton: 'Ordenar por',
    filterButton: 'Filtros',
    resultsText: 'Projetos foram encontrados',
    filters: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'Prisma',
      'PWA',
      'Full-Stack',
    ],
    orderOptions: ['Recentes', 'Antigos', 'Complexidade'],
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
          'Full-Stack',
          'Node.js',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/resfish-app',
        projectURL: 'https://resfish-app.vercel.app/',
        complexity: 3,
        date: new Date('07-22-2022'),
        imageSrc: ResfishImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Quiz Game',
        description:
          'Um quiz multijogador onde existem diversas salas de perguntas e os participantes podem competir entre si.',
        tags: [
          'React',
          'TypeScript',
          'Full-Stack',
          'Socket.io',
          'Prisma',
          'MySQL',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/quiz-game',
        projectURL: 'https://simple-quiz-iota.vercel.app/',
        imageSrc: QuizImg,
        complexity: 3,
        date: new Date('04-20-2022'),
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Calendar App',
        description:
          'Um calendário onde é possível definir tarefas a serem feitas.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT', 'Full-Stack'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
        complexity: 3,
        date: new Date('02-04-2022'),
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Kanban App',
        description:
          'Um quadro de tarefas onde os usuários conseguem adicionar tarefas, arrastá-las entre colunas e acessar quadros de outros usuários',
        tags: [
          'Node.js',
          'TypeScript',
          'JWT',
          'Prisma',
          "Drag'n Drop",
          'Full-Stack',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/kanban-app',
        projectURL: 'https://kanban-app-cyan.vercel.app/',
        imageSrc: KanbanImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
      {
        uptitle: 'Projeto Front-end',
        title: 'Ignews',
        description:
          'Um blog por assinatura, onde o usuário precisa pagar por um valor mensal para ter acesso a todo o conteúdo do artigos.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'FaunaDB', 'Prismic CMS'],
        githubURL: 'https://github.com/bryanmaraujo544/ignews',
        projectURL: '',
        imageSrc: IgnewsImg,
        complexity: 3,
        date: new Date('07-15-2022'),
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
        complexity: 3,
        date: new Date('07-11-2022'),
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Pomodoro App',
        description:
          'Um timer onde é possível definir um tempo para realizar uma tarefa, e quando terminada um tempo de descanso é iniciado.',
        tags: ['React', 'PWA', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/pomodoro-app',
        projectURL: 'https://pomodoro-app-silk.vercel.app/',
        imageSrc: PomodoroImg,
        complexity: 2,
        date: new Date('01-22-2022'),
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Weather App',
        description:
          'Uma aplicação onde é possível o usuário inserir o nome de uma cidade do mundo receber as informações climáticas do momento e da semana.',
        tags: ['React', 'TypeScript', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/weather-app',
        projectURL: 'https://weather-app-plum-nine.vercel.app/',
        imageSrc: WeatherImg,
        complexity: 2,
        date: new Date('01-28-2022'),
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Dev World',
        description:
          'Uma aplicação para usuários encontrarem informações sobre desenvolvedores no Github.',
        tags: [
          'Full-Stack',
          'Next.js',
          'Node.js',
          'MySQL',
          'JWT',
          'TypeScript',
        ],

        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
        complexity: 2,
        date: new Date('12-13-2021'),
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Event Platform',
        description:
          'Uma plataforma de evento onde usuários podem acessar conteúdos e materiais.',
        tags: ['React', 'TypeScript', 'GraphQL', 'GraphCMS', 'TailwindCSS'],
        githubURL: 'https://github.com/bryanmaraujo544/event-platform',
        projectURL: 'https://event-platform-plum-seven.vercel.app',
        imageSrc: EventImg,
        complexity: 2,
        date: new Date('07-01-2022'),
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'Full-Stack'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'https://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
        complexity: 2,
        date: new Date('12-09-2021'),
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Restaurant App',
        description:
          'Uma aplicação contendo diversas informações sobre um restaurante e uma página para cada ponto do mesmo.',
        tags: ['React', 'Next.js', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/restaurant-app',
        projectURL: 'https://restaurant-app-pi.vercel.app/',
        imageSrc: RestaurantImg,
        complexity: 2,
        date: new Date('07-20-2021'),
      },
      {
        uptitle: 'Landing Page',
        title: 'ImCode Landing',
        description: 'Uma landing page baseada em um design pronto',
        tags: ['React', 'Landing', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/imcode-test',
        projectURL: 'https://imcode-test.vercel.app/',
        imageSrc: ImCodeImg,
        complexity: 1,
        date: new Date('02-31-2022'),
      },
    ],
  },
  en: {
    title: 'Projects',
    inputPlaceholder: 'Find a project...',
    orderButton: 'Order by',
    filterButton: 'Filters',
    resultsText: 'Projects was found',
    filters: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'Prisma',
      'PWA',
      'Full-Stack',
    ],
    orderOptions: ['Recents', 'Oldest', 'Complexity'],
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
          'Full-Stack',
          'Node.js',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/resfish-app',
        projectURL: 'https://resfish-app.vercel.app/',
        complexity: 3,
        date: new Date('07-22-2022'),
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
          'Full-Stack',
          'Socket.io',
          'Prisma',
          'MySQL',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/quiz-game',
        projectURL: 'https://simple-quiz-iota.vercel.app/',
        imageSrc: QuizImg,
        complexity: 3,
        date: new Date('04-20-2022'),
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Calendar App',
        description:
          'A calendar where the user can assign tasks to be completed on some date.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT', 'Full-Stack'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
        complexity: 3,
        date: new Date('02-04-2022'),
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
          'Full-Stack',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/kanban-app',
        projectURL: 'https://kanban-app-cyan.vercel.app/',
        imageSrc: KanbanImg,
        complexity: 3,
        date: new Date('04-03-2022'),
      },
      {
        uptitle: 'Front-end Project',
        title: 'Ignews',
        description:
          'An subscription blog where the user can read articles if buy for subscription.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'FaunaDB', 'Prismic CMS'],
        githubURL: 'https://github.com/bryanmaraujo544/ignews',
        projectURL: '',
        imageSrc: IgnewsImg,
        complexity: 3,
        date: new Date('07-15-2022'),
      },

      {
        uptitle: 'Full-Stack Project',
        title: 'Dtmoney',
        description: 'An application to manage personal money transactions.',
        tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
        githubURL: 'https://github.com/bryanmaraujo544/dtmoney',
        projectURL: 'https://dtmoney-two-hazel.vercel.app',
        imageSrc: MoneyImg,
        complexity: 3,
        date: new Date('07-11-2022'),
      },
      {
        uptitle: 'Front-End Project',
        title: 'Pomodoro App',
        description:
          'A timer based on pomodoro technique, where the user can set a time to make some activity and when is finished a rest time starts.',
        tags: ['React', 'PWA', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: PomodoroImg,
        complexity: 2,
        date: new Date('01-22-2022'),
      },
      {
        uptitle: 'Front-End Project',
        title: 'Weather App',
        description:
          'An application where the user can search for a city name and receive the current and the weekly weather information.',
        tags: ['React', 'TypeScript', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/weather-app',
        projectURL: 'https://weather-app-plum-nine.vercel.app/',
        imageSrc: WeatherImg,
        complexity: 2,
        date: new Date('01-28-2022'),
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Dev World',
        description:
          'An app for the users to find Github profiles and save them if they want.',
        tags: [
          'Full-Stack',
          'Next.js',
          'Node.js',
          'MySQL',
          'JWT',
          'TypeScript',
        ],
        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
        complexity: 2,
        date: new Date('12-13-2021'),
      },
      {
        uptitle: 'Front-End Project',
        title: 'Event Platform',
        description:
          'An event platform where user can access lectures and materials',
        tags: ['React', 'TypeScript', 'GraphQL', 'GraphCMS', 'TailwindCSS'],
        githubURL: 'https://github.com/bryanmaraujo544/event-platform',
        projectURL: 'https://event-platform-plum-seven.vercel.app',
        imageSrc: EventImg,
        complexity: 2,
        date: new Date('07-01-2022'),
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Week Planner',
        description: 'An app where the user can organize its weekly tasks.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'Full-Stack'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'https://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
        complexity: 2,
        date: new Date('12-09-2021'),
      },
      {
        uptitle: 'Front-End Project',
        title: 'Restaurant App',
        description:
          'An application where there are informations about one restaurant.',
        tags: ['React', 'Next.js', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/restaurant-app',
        projectURL: 'https://restaurant-app-pi.vercel.app/',
        imageSrc: RestaurantImg,
        complexity: 2,
        date: new Date('07-20-2021'),
      },
      {
        uptitle: 'Landing Page',
        title: 'ImCode Landing',
        description: 'One landing page based on a internet design',
        tags: ['React', 'Landing', 'Styled-Components'],
        githubURL: 'https://github.com/bryanmaraujo544/imcode-test',
        projectURL: 'https://imcode-test.vercel.app/',
        imageSrc: ImCodeImg,
        complexity: 1,
        date: new Date('02-31-2022'),
      },
    ],
  },
};

export default textContent;
