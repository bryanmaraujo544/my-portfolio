import { useState } from 'react';
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';
import useSound from 'use-sound';
import { motion } from 'framer-motion';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';

import logo from 'assets/logo.png';
import { MobileMenu } from 'components/MobileMenu';
import {
  Container,
  MainContainer,
  RightButtons,
  ConfigContainer,
} from './styles';
import texts from './text-content';

import PtImg from '../../assets/portuguese.png';
import EnImg from '../../assets/english.jpg';

import PopSound from '../../../public/pop_drip.mp3';
import ClickSound from '../../../public/click_04.mp3';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [language, setLanguage] = useState('pt');

  const [playPop] = useSound(PopSound);
  const [playClick] = useSound(ClickSound);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function handleToggleSettings() {
    playPop();
    setIsSettingsOpen((prevState) => !prevState);
  }

  console.log({ isSettingsOpen });

  return (
    <Container>
      <div className="logo">
        <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
      </div>
      <MainContainer as={motion.div}>
        <ul>
          {texts.pt.listSections.map(({ title, targetSection }) => (
            <LinkScroll
              to={targetSection}
              smooth
              offset={-24}
              onClick={() => playClick()}
            >
              <li key={title} className="list-item">
                {title}
              </li>
            </LinkScroll>
          ))}
        </ul>
        <RightButtons>
          <button
            type="button"
            className="resume-btn"
            onMouseEnter={() => playPop()}
            onClick={() => playClick()}
          >
            {texts.pt.resumeButton}
          </button>
          <ConfigContainer>
            <button
              type="button"
              className="settings-icon-container"
              onClick={handleToggleSettings}
            >
              <AiOutlineSetting className="settings-icon" />
            </button>
            <motion.div
              className="settings"
              animate={{
                y: isSettingsOpen ? 0 : -24,
                opacity: isSettingsOpen ? 1 : 0,
                display: isSettingsOpen ? 'flex' : 'none',
              }}
            >
              <button type="button">
                {isSoundOn ? (
                  <GiSoundOn className="sound-icon" />
                ) : (
                  <GiSoundOff className="sound-icon" />
                )}
              </button>
              <button type="button" className="language-container">
                <div className="lang-img">
                  {language === 'pt' ? (
                    <Image src={PtImg} layout="fill" />
                  ) : (
                    <Image src={EnImg} layout="fill" />
                  )}
                </div>
              </button>
            </motion.div>
          </ConfigContainer>
        </RightButtons>
      </MainContainer>

      {/* MOBILE COMPONENTS */}
      <div className="menu-btns-container" onClick={() => handleToggleMenu()}>
        {!isMenuOpen && <CgMenuRight className="icon" />}
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Container>
  );
};
