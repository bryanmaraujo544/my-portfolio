import WeekPlannerImg from 'assets/projects-images/week-planner.png';
import DevWorldImg from 'assets/projects-images/dev-world.png';
import PomodoroImg from 'assets/projects-images/pomodoro.png';
import WeatherImg from 'assets/projects-images/weather.png';
import CalendarImg from 'assets/projects-images/calendar.png';

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
        title: 'Calendar App',
        description:
          'Um calendário onde é possível definir tarefas a serem feitas.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Pomodoro App',
        description:
          'Um timer onde é possível definir um tempo para realizar uma tarefa, e quando terminada um tempo de descanso é iniciado',
        tags: ['React', 'PWA', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/pomodoro-app',
        projectURL: 'https://pomodoro-app-silk.vercel.app/',
        imageSrc: PomodoroImg,
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
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Dev World',
        description:
          'Uma aplicação para usuários encontrarem informações sobre desenvolvedores no Github',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'https://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
    ],
  },
  en: {
    title: 'Projects',
    seeMoreButton: 'See more projects',
    projects: [
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Calendar App',
        description:
          'A calendar where the user can assign tasks to be completed in some date',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/calendar-app',
        projectURL: 'https://calendar-app-delta.vercel.app/login',
        imageSrc: CalendarImg,
      },
      {
        uptitle: 'Front-End Project',
        title: 'Pomodoro App',
        description:
          'A timer based on pomodoro technique, where the user can set a time to make some activity and when is finished a rest time starts',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: PomodoroImg,
      },
      {
        uptitle: 'Projeto Front-End',
        title: 'Weather App',
        description:
          'An application where the user is able to search for a city name and receive the current and the weekly weather informations',
        tags: ['React', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/weather-app',
        projectURL: 'https://weather-app-plum-nine.vercel.app/',
        imageSrc: WeatherImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Dev World',
        description:
          'An app for the users find github profiles and save them if they want.',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT', 'TypeScript'],
        githubURL: 'https://github.com/bryanmaraujo544/dev-world',
        projectURL: '',
        imageSrc: DevWorldImg,
      },
      {
        uptitle: 'Full-Stack Project',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL', 'JWT'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'https://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
    ],
  },
};

export default textContent;
