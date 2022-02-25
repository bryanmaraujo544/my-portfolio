/* eslint-disable react/no-array-index-key */
import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
// import ScrollReveal from 'utils/ScrollReveal';

import { SectionTitle } from 'components/SectionTitle';
import smileImg from 'assets/smile-cartoon.png';
import { SettingsContext } from 'contexts/SettingsContext';
import { motion, useAnimation } from 'framer-motion';
import { Container, TextContainer, ImageContainer } from './styles';
import texts from './text-content';

export const About = () => {
  const { language } = useContext(SettingsContext);
  const sectionRef = useRef(null) as any;
  const controls = useAnimation();

  useEffect(() => {
    const sectionTop = sectionRef?.current.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > sectionTop - window.innerHeight / 1.25) {
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.15 } });
      } else {
        controls.start({ y: '4.8rem', opacity: 0 });
      }
    });
  }, []);

  return (
    <Container
      id="about"
      ref={sectionRef}
      as={motion.section}
      initial={{ opacity: 0, y: '4.8remx' }}
      animate={controls}
    >
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
