import WeekPlannerImg from 'assets/projects-images/week-planner.png';

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
  projects: Project[];
}

interface Projects {
  pt: Data;
  en: Data;
}

const textContent: Projects = {
  pt: {
    title: 'Projetos',
    projects: [
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
      {
        uptitle: 'Projeto Full-Stack',
        title: 'Week Planner',
        description: 'Um app para usuários orgazinar suas tarefas semanais',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
    ],
  },
  en: {
    title: 'Projects',
    projects: [
      {
        uptitle: 'Full-Stack project',
        title: 'Week Planner',
        description: 'An app to user organise their weekly tasks',
        tags: ['React', 'Next.js', 'Node.js', 'MySQL'],
        githubURL: 'https://github.com/bryanmaraujo544/week-planner-frontend',
        projectURL: 'http://week-planner.vercel.app/',
        imageSrc: WeekPlannerImg,
      },
    ],
  },
};

export default textContent;
