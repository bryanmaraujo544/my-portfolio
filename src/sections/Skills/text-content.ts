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
