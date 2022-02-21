/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import { useSound } from 'hooks/useSound';
import {
  Container,
  Uptitle,
  Title,
  DescContainer,
  Buttons,
  Tags,
} from './styles';

import ClickSound from '../../../public/click_04.mp3';

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
  const [playClick] = useSound(ClickSound);

  return (
    <Container isLeft={isLeft}>
      <div className="image-container">
        <Image
          src={projectInfos.imageSrc}
          layout="fill"
          alt="project-preview"
        />
      </div>
      <div className="infos-container">
        <Uptitle>{projectInfos.uptitle}</Uptitle>
        <Title>{projectInfos.title}</Title>
        <DescContainer>
          <p className="description">{projectInfos.description}</p>
        </DescContainer>
        <Tags>
          {projectInfos.tags.map((tag) => (
            <p key={tag} className="tag">
              {tag}
            </p>
          ))}
        </Tags>
        <Buttons>
          <Link href={projectInfos.githubURL}>
            <a onClick={() => playClick()}>
              <FiGithub className="icon" />
            </a>
          </Link>
          {projectInfos.projectURL && (
            <Link href={projectInfos.projectURL}>
              <a onClick={() => playClick()}>
                <IoOpenOutline className="icon" />
              </a>
            </Link>
          )}
        </Buttons>
      </div>
    </Container>
  );
};
