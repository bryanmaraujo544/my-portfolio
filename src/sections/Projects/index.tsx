import { Project } from 'components/Project';
import { SectionTitle } from 'components/SectionTitle';
import { Container } from './styles';
import texts from './text-content';

export const Projects = () => {
  console.log('');

  return (
    <Container>
      <SectionTitle>{texts.pt.title}</SectionTitle>
      <div className="projects-container">
        {texts.pt.projects.map((project, i) => (
          <Project projectInfos={project} isLeft={i % 2 === 1} />
        ))}
      </div>
    </Container>
  );
};
