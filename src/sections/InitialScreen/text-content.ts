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
        'Atualmente estou à procura de uma oportunidade de emprego para colocar minhas habilidades em prática e auxiliar a empresa a atingir seus objetivos',
    },
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Front-End Developer',
      description:
        'Currently, I am looking for a job opportunity to put my skills in practice and contribute to the company achieve its goals',
    },
  },
};

export default textContent;
