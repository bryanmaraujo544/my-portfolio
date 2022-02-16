// interface DataProps {
//   mainInfos: {
//     uptitle: string;
//     name: string;
//     subtitle: string;
//     description: string;
//   };
// }

// interface Props {
//   pt: DataProps;
//   en: DataProps;
// }

const textContent = {
  pt: {
    title: 'Sobre Mim',
    mainText: [
      'Olá! Meu nome é Bryan e sou apaixonado por desenvolver soluções em forma de aplicações para a web. Busco evoluir a cada dia por meio de estudos teóricos alinhados a muita prática!',
      <>
        Minha trajetória na programação começou no ínicio de 2020, quando entrei
        no curso técnico de Desenvolvimento de Sistemas. Após 1 ano estudando{' '}
        <b>HTML</b>, <b>CSS</b> e <b>Vanilla JavaScript</b>, iniciei meus
        estudos na biblioteca <b>React</b>, e após algum tempo em <b>Node.js</b>
        .
      </>,
      <>
        Atualmente meus estudos e projetos são para web, onde desenvolvo o
        <b>Front-end</b> e o <b>Back-end</b> da aplicação. Não me considero
        ainda um <b>Desenvolvedor Full-stack</b>, pois creio que consigo assumir
        responsabilidades com mais preparo no front-end do que no back-end,
        porém estou em busca de me aperfeiçoar nas duas esferas.
      </>,
    ],
  },
  en: {
    mainInfos: {
      uptitle: 'Hi, my name is',
      name: 'Bryan Martins',
      subtitle: 'Front-End Developer',
      description:
        'I have large experience on building interactive and modern web applications. Nowadays I am looking for a job opportunity to put my skills in practice',
    },
  },
};

export default textContent;
