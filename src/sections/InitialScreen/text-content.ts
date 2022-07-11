interface DataProps {
  mainInfos: {
    uptitle: string;
    name: string;
    subtitle: string;
    description: string;
  };
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    mainInfos: {
      uptitle: 'Olá, meu nome é',
      name: 'Bryan Martins',
      subtitle: 'Desenvolvedor Front-End',
      description:
        'Atualmente atuo como Freelancer, porém estou à procura de oportunidades de trabalho formal.',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Front-End Developer',
      description:
        "Currently I'm Freelancer, but I'm looking for opportunities of formal jobs.",
    },
  },
};

export default textContent;
