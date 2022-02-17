import Image from 'next/image';

import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import {
  Container,
  Uptitle,
  Title,
  DescContainer,
  Buttons,
  Tags,
} from './styles';

interface ProjectProps {
  uptitle: string;
  title: string;
  description: string;
  tags: string[];
  githubURL: string;
  projectURL: string;
  imageSrc: any;
}

interface Props {
  isLeft: boolean;
  projectInfos: ProjectProps;
}

export const Project = ({ isLeft, projectInfos }: Props) => {
  console.log({ isLeft, projectInfos });

  return (
    <Container>
      <div className="image-container">
        <Image src={projectInfos.imageSrc} layout="fill" />
      </div>
      <div className="infos-container">
        <Uptitle>{projectInfos.uptitle}</Uptitle>
        <Title>{projectInfos.title}</Title>
        <DescContainer>
          <p className="description">{projectInfos.description}</p>
        </DescContainer>
        <Tags>
          {projectInfos.tags.map((tag) => (
            <p className="tag">{tag}</p>
          ))}
        </Tags>
        <Buttons>
          <button type="submit" className="btn">
            <FiGithub className="icon" />
          </button>
          <button type="submit" className="btn">
            <IoOpenOutline className="icon" />
          </button>
        </Buttons>
      </div>
    </Container>
  );
};
