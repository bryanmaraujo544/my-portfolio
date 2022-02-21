/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import Image from 'next/image';

import { SectionTitle } from 'components/SectionTitle';
import smileImg from 'assets/smile-cartoon.png';
import { SettingsContext } from 'contexts/SettingsContext';
import { Container, TextContainer, ImageContainer } from './styles';
import texts from './text-content';

export const About = () => {
  const { language } = useContext(SettingsContext);

  return (
    <Container id="about">
      <SectionTitle className="title">{texts[language].title}</SectionTitle>
      <div className="main-container">
        <TextContainer>
          {texts[language].mainText.map((text, i) => (
            <p key={i}>{text}</p>
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
