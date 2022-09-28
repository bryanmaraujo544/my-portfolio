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
      subtitle: 'Desenvolvedor Full-Stack',
      description:
        'Atualmente trabalho como Desenvolvedor Full-Stack na empresa Curseduca',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Full-Stack Developer',
      description:
        "Currently I'm working as Full-Stack Developer at Curseduca",
    },
  },
};

export default textContent;
