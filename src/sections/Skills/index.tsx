import { useContext } from 'react';
import Image from 'next/image';

import { SkillCard } from 'components/SkillCard';
import ArrowIcon from 'assets/arrow.svg';
import { SettingsContext } from 'contexts/SettingsContext';
import { Container } from './styles';
import texts from './text-content';

export const Skills = () => {
  const { language } = useContext(SettingsContext);
  console.log('skills');

  return (
    <Container>
      <div className="arrow-icon">
        <Image src={ArrowIcon} layout="fill" />
      </div>
      <div className="skills-cards-container">
        {texts[language].skills.slice(0, 3).map(({ text }) => (
          <SkillCard text={text} />
        ))}
      </div>
      <div className="arrow-icon">
        <Image src={ArrowIcon} layout="fill" />
      </div>
    </Container>
  );
};
