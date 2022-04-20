/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import { Header } from 'components/Header';
import { motion } from 'framer-motion';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { SettingsContext } from 'contexts/SettingsContext';
import { Project } from 'components/Project';
import { propagationChildVariants } from 'variants/propagationChildVariants';
import { Container, Projects } from './styles';
import data from './text-content';
import { SubHeader } from './SubHeader';

export const AllProjects = () => {
  const [whichBtnIsActive, setWhichBtnIsActive] = useState('');

  const { language } = useContext(SettingsContext);

  const [order, setOrder] = useState(data[language].orderOptions[0]);
  const [filters, setFilters] = useState([] as string[]);

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
      <Projects>
        {data[language].projects.map((project, i) => (
          <Project
            projectInfos={project}
            isLeft={i % 2 === 1}
            variants={propagationChildVariants}
          />
        ))}
      </Projects>
    </Container>
  );
};
