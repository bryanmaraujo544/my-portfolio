/* eslint-disable array-callback-return */
/* eslint-disable function-paren-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { motion } from 'framer-motion';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { SettingsContext } from 'contexts/SettingsContext';
import { Project } from 'components/Project';
// import { propagationChildVariants } from 'variants/propagationChildVariants';
import { Container, Projects } from './styles';
import data from './text-content';
import { SubHeader } from './SubHeader';

interface ProjectI {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
  date?: any;
  complexity?: 1 | 2 | 3;
}

export const AllProjects = () => {
  const { language } = useContext(SettingsContext);

  const [whichBtnIsActive, setWhichBtnIsActive] = useState('');

  // prettier-ignore
  const [projects, setProjects] = useState(data[language].projects as ProjectI[]);
  const [order, setOrder] = useState(data[language].orderOptions[0]);
  const [filters, setFilters] = useState([] as string[]);

  useEffect(() => {
    setProjects(data[language].projects);
  }, [language]);

  const filteredProjects = projects.filter(({ tags }) =>
    filters.every((filter) => tags.includes(filter))
  );

  return (
    <Container
      as={motion.div}
      variants={propagationContainerVariants}
      initial="hidden"
      animate="show"
    >
      <Header isProjectsPage />
      <SubHeader
        filters={filters}
        order={order}
        setFilters={setFilters}
        setOrder={setOrder}
        setWhichBtnIsActive={setWhichBtnIsActive}
        whichBtnIsActive={whichBtnIsActive}
      />
      <Projects
        as={motion.section}
        // variants={propagationContainerVariants}
        // initial="hidden"
        // animate="show"
      >
        {filteredProjects.map((project, i) => (
          <Project
            projectInfos={project}
            isLeft={i % 2 === 1}
            variants={{}}
            key={i}
          />
        ))}
      </Projects>
    </Container>
  );
};
