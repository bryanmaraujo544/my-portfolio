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
      subtitle: 'Tech Lead',
      description:
        'Atualmente atuo como Tech Lead na empresa Curseduca. Liderando um dos squads do time de engenharia.',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Tech Lead',
      description:
        "Currently I'm working as Tech Lead at Curseduca. Leading one of the squads of the engineering team.",
    },
  },
};

export default textContent;
