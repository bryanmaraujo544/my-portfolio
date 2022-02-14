import { useState } from 'react';
import Image from 'next/image';

import logo from 'assets/logo.svg';
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { MobileMenu } from 'components/MobileMenu';
import texts from './text-content';
import { Container, MainContainer, RightButtons } from './styles';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <div className="logo">
        <Image src={logo} layout="fill" />
      </div>
      <MainContainer as={motion.div}>
        {texts.pt.listSections.map(({ title }) => (
          <li className="list-item">{title}</li>
        ))}
        <RightButtons>
          <button type="button" className="resume-btn">
            {texts.pt.resumeButton}
          </button>
          <div className="config-container">
            <AiOutlineSetting className="settings-icon" />
          </div>
        </RightButtons>
      </MainContainer>

      <div className="menu-btns-container" onClick={() => handleToggleMenu()}>
        {isMenuOpen ? (
          <AiOutlineClose className="icon" />
        ) : (
          <CgMenuRight className="icon" />
        )}
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </Container>
  );
};
