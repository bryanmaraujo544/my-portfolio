interface DataProps {
  skills: { text: string }[];
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    skills: [
      {
        text: '1Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: '2Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: '3Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: '4Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: '5Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
    ],
  },
  en: {
    skills: [
      {
        text: 'Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: 'Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: 'Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: 'Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: 'Desenvolver interfaces altamente dinâmicas e perfomáticas',
      },
    ],
  },
};

export default textContent;
