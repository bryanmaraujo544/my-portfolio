interface DataProps {
  text: any;
}

interface Props {
  pt: DataProps;
  en: DataProps;
}

const textContent: Props = {
  pt: {
    text: (
      <>
        Desenvolvido por <b>Bryan Martins</b>
      </>
    ),
  },
  en: {
    text: (
      <>
        Developed <b>Bryan Martins</b>
      </>
    ),
  },
};

export default textContent;
