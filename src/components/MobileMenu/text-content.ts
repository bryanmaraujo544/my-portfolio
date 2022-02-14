interface DataProps {
  listSections: { title: string; targetSection: string }[];
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    listSections: [
      {
        title: 'Sobre',
        targetSection: 'about',
      },
      {
        title: 'Habilidades',
        targetSection: 'skills',
      },
      {
        title: 'Projetos',
        targetSection: 'projects',
      },
      {
        title: 'Contato',
        targetSection: 'contact',
      },
    ],
  },
  en: {
    listSections: [
      {
        title: 'About',
        targetSection: 'about',
      },
      {
        title: 'Skills',
        targetSection: 'skills',
      },
      {
        title: 'Projects',
        targetSection: 'projects',
      },
      {
        title: 'Contact',
        targetSection: 'contact',
      },
    ],
  },
};

export default textContent;
