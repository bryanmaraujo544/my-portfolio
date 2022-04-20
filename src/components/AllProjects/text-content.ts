import WeekPlannerImg from 'assets/projects-images/week-planner.png';
import DevWorldImg from 'assets/projects-images/dev-world.png';
import PomodoroImg from 'assets/projects-images/pomodoro.png';
import WeatherImg from 'assets/projects-images/weather.png';
import CalendarImg from 'assets/projects-images/calendar.png';
import KanbanImg from 'assets/projects-images/kanban.png';
import QuizImg from 'assets/projects-images/quiz.png';
import ImCodeImg from 'assets/projects-images/imcode-landing.png';
import RestaurantImg from 'assets/projects-images/restaurant-app.png';

interface Project {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
  date?: any;
  complexity?: 1 | 2 | 3;
}

interface Data {
  title: string;
  inputPlaceholder: string;
  projects: Project[];
  orderButton: string;
  filterButton: string;
  filters: string[];
  orderOptions: string[];
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
    filters: ['Node.js', 'Next.js', 'React'],
    orderOptions: ['Recentes', 'Antigos', 'Complexidade'],
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
        complexity: 3,
        date: new Date('04-20-2022'),
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
        complexity: 3,
        date: new Date('04-03-2022'),
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
        complexity: 3,
        date: new Date('02-04-2022'),
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
        tags: ['React', 'TypeScript'],
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
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
        complexity: 2,
        date: new Date('12-13-2021'),
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT'],
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
        tags: ['React', 'Next.js', 'Landing', 'Styled-Components'],
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
    filters: ['Node.js', 'Next.js', 'React'],
    orderOptions: ['Recents', 'Oldest', 'Complexity'],
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
        complexity: 3,
        date: new Date('04-20-2022'),
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
        complexity: 3,
        date: new Date('04-03-2022'),
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
        complexity: 3,
        date: new Date('02-04-2022'),
      },
      {
        uptitle: 'Front-End Project',
        title: 'Pomodoro App',
        description:
          'A timer based on pomodoro technique, where the user can set a time to make some activity and when is finished a rest time starts.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
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
        tags: ['React', 'TypeScript'],
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
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
        complexity: 2,
        date: new Date('12-13-2021'),
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Week Planner',
        description: 'An app where the user can organize its weekly tasks.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT'],
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
        tags: ['React', 'Next.js', 'Landing', 'Styled-Components'],
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
