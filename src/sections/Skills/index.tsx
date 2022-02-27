/* eslint-disable react/no-array-index-key */
import { useContext, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { SkillCard } from 'components/SkillCard';
import ArrowIcon from 'assets/arrow.svg';
import { SettingsContext } from 'contexts/SettingsContext';
import { Container } from './styles';
import texts from './text-content';

export const Skills = () => {
  const { language } = useContext(SettingsContext);
  const [skills, setSkills] = useState<any>(texts[language].skills);
  console.log(skills);

  // prettier-ignore
  function handleNextSkill() {
    const newSkills = [];
    for (let i = 0; i < skills.length - 1; i += 1) {
      /*
        In the first time this loop runs we put the LAST element of the original array in the
        FIRST element of the new array. The reason is because we are passing all the element to the
        next position, but the last needs to come back to the first one.
      */
      if (i === 0) {
        newSkills[0] = skills[skills.length - 1];
      }

      // Putting all the old values after the value that it was already putted in the code below.
      // This loop are not going to put the last element of the old array, because it was already
      // putted in the first element of the new array. And for that, the loops only runs
      // by the penultimate index of the original array.
      newSkills.push(skills[i]);
    }

    setSkills(newSkills);
  }

  function handleLastSkill() {}

  return (
    <Container>
      <div className="arrow-icon" onClick={() => handleLastSkill()}>
        <Image src={ArrowIcon} layout="fill" />
      </div>
      <motion.div className="skills-cards-container" layout>
        {skills.map(({ text }: any) => (
          <SkillCard text={text} key={text} />
        ))}
      </motion.div>
      <div className="arrow-icon" onClick={() => handleNextSkill()}>
        <Image src={ArrowIcon} layout="fill" />
      </div>
    </Container>
  );
};
