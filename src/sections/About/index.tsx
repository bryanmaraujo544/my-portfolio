import Image from 'next/image';

import { SectionTitle } from 'components/SectionTitle';
import smileImg from 'assets/smile-cartoon.png';
import { Container, TextContainer, ImageContainer } from './styles';
import texts from './text-content';

export const About = () => {
  console.log('');

  return (
    <Container>
      <SectionTitle className="title">Sobre Mim</SectionTitle>
      <div className="main-container">
        <TextContainer>
          {texts.pt.mainText.map((text: any) => (
            <p>{text}</p>
          ))}
        </TextContainer>
        <ImageContainer>
          <div className="image">
            <Image src={smileImg} layout="fill" alt="my-cartoon" />
          </div>
        </ImageContainer>
      </div>
      {/* <p>{texts.pt.mainText[2]}</p> */}
    </Container>
  );
};
