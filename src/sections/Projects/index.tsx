/* eslint-disable react/no-array-index-key */
import Link from 'next/link';

import { Project } from 'components/Project';
import { SectionTitle } from 'components/SectionTitle';
import { Container } from './styles';
import texts from './text-content';

export const Projects = () => {
  console.log('');

  return (
    <Container id="projects">
      <SectionTitle>{texts.pt.title}</SectionTitle>
      <div className="projects-container">
        {texts.pt.projects.map((project, i) => (
          <Project key={i} projectInfos={project} isLeft={i % 2 === 1} />
        ))}
      </div>
      <button type="button" className="see-more">
        <Link href="https://github.com/bryanmaraujo544?tab=repositories">
          {texts.pt.seeMoreButton}
        </Link>
      </button>
    </Container>
  );
};
