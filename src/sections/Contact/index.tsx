import { AiOutlineInstagram } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import { SectionTitle } from 'components/SectionTitle';
import { Container } from './styles';

import texts from './text-content';

export const Contact = () => {
  console.log('Contact');

  return (
    <Container>
      <SectionTitle>{texts.pt.title}</SectionTitle>
      <p className="description">{texts.pt.description}</p>
      <div className="social-medias">
        <AiOutlineInstagram className="icon" />
        <FiGithub className="icon" />
        <FaLinkedinIn className="icon" />
      </div>
    </Container>
  );
};
