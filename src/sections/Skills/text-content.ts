interface DataProps {
  title: string;
  skills: { text: string }[];
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    title: 'Habilidades',
    skills: [
      {
        text: 'Desenvolvimento de interfaces altamente dinâmicas e perfomáticas',
      },
      {
        text: "Grande experiência em consumo de Api's",
      },
      {
        text: 'Construção de layouts responsivos e acessíveis',
      },
      {
        text: 'Experiência com diversas formas de estilização no React',
      },
      {
        text: 'Experiência com diferentes gerenciadores de estado no React',
      },
      {
        text: 'Implementação de animações nas aplicações',
      },
      {
        text: 'Conhecimento em técnicas de Clean Code',
      },
    ],
  },
  en: {
    title: 'Skills',
    skills: [
      {
        text: 'Development of perfomatic and highly dynamic interfaces',
      },
      {
        text: "Large experience in Api's consume",
      },
      {
        text: 'Accessibles and responsives layout development ',
      },
      {
        text: 'Experince with different ways to style React Apps',
      },
      {
        text: 'Experience with distinct React state managers',
      },
      {
        text: 'Efficiency in animate React applications',
      },
      {
        text: 'Clean Code techniques knowledge',
      },
    ],
  },
};

export default textContent;
