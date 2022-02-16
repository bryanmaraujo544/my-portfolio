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
        'Larga experiência em construir aplicações web interativas e modernas. Atualmente estou à procura de uma oportuinidade de emprego para colocar minhas habilidades em prática.',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Front-End Developer',
      description:
        'Large experience on building interactive and modern web applications. Nowadays I am looking for a job opportunity to put my skills in practice',
    },
  },
};

export default textContent;
