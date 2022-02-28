interface DataProps {
  title: string;
  description: any;
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    title: 'Contate-me',
    description: (
      <>
        Estou aberto à oportunidades de emprego. Caso queira me contatar esteja
        à vontade para me mandar um email em <b>bryanmaraujo544@gmail.com</b>,
        ou nas minhas redes sociais abaixo.
      </>
    ),
  },
  en: {
    title: 'Contact me',
    description: (
      <>
        I am currently looking for a job and I am available for any conversation
        about. You can reach me for my email: <b>bryanmaraujo544@gmail.com</b>,
        or in one of my social medias below.
      </>
    ),
  },
};

export default textContent;
