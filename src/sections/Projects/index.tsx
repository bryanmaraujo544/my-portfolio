/* eslint-disable react/no-array-index-key */
import Link from 'next/link';

import { Project } from 'components/Project';
import { SectionTitle } from 'components/SectionTitle';
import useSound from 'use-sound';
import { useContext } from 'react';
import { SettingsContext } from 'contexts/SettingsContext';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Container } from './styles';
import texts from './text-content';

import PopSound from '../../../public/pop_drip.mp3';
import ClickSound from '../../../public/click_04.mp3';

export const Projects = () => {
  const [playPop] = useSound(PopSound);
  const [playClick] = useSound(ClickSound);
  const { language } = useContext(SettingsContext);

  const { sectionRef, controls } = useScrollAnimation();

  return (
    <Container
      id="projects"
      ref={sectionRef}
      as={motion.section}
      animate={controls}
    >
      <SectionTitle>{texts[language].title}</SectionTitle>
      <div className="projects-container">
        {texts[language].projects.map((project, i) => (
          <Project key={i} projectInfos={project} isLeft={i % 2 === 1} />
        ))}
      </div>
      <button
        type="button"
        className="see-more"
        onMouseEnter={() => playPop()}
        onClick={() => playClick()}
      >
        <Link href="https://github.com/bryanmaraujo544?tab=repositories">
          {texts[language].seeMoreButton}
        </Link>
      </button>
    </Container>
  );
};
