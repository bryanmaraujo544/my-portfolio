/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import { useSound } from 'hooks/useSound';
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';

import logo from 'assets/logo.png';
import { MobileMenu } from 'components/MobileMenu';
import { SettingsContext } from 'contexts/SettingsContext';
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

  // prettier-ignore
  // eslint-disable-next-line max-len
  const { isSoundOn, language, handleToggleLanguage, handleToggleSound } = useContext(SettingsContext);

  const [playPop] = useSound(PopSound);
  const [playClick] = useSound(ClickSound);

  function handleToggleMenu() {
    playPop();
    setIsMenuOpen((prevState) => !prevState);
  }

  function handleToggleSettings() {
    playPop();
    setIsSettingsOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <div className="logo">
        <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
      </div>
      <MainContainer as={motion.div}>
        <ul>
          {texts[language].listSections.map(({ title, targetSection }) => (
            <LinkScroll
              to={targetSection}
              smooth
              offset={-24}
              onClick={() => playClick()}
              key={title}
            >
              <li className="list-item" onClick={() => playClick()}>
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
            {texts[language].resumeButton}
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
              <button
                type="button"
                onClick={handleToggleSound}
                className="sound-btn"
              >
                <motion.div
                  className="sound-icon-container"
                  animate={{ opacity: isSoundOn ? 1 : 0 }}
                >
                  <GiSoundOn className="sound-icon" />
                </motion.div>
                <motion.div
                  className="sound-icon-container"
                  animate={{ opacity: isSoundOn ? 0 : 1 }}
                >
                  <GiSoundOff className="sound-icon" />
                </motion.div>
              </button>
              <button
                type="button"
                className="language-container"
                onClick={handleToggleLanguage}
              >
                <div className="lang-img">
                  <motion.div
                    animate={{ opacity: language === 'pt' ? 1 : 0 }}
                    className="img"
                  >
                    <Image src={PtImg} layout="fill" alt="portuguese-pt" />
                  </motion.div>

                  <motion.div
                    animate={{ opacity: language === 'en' ? 1 : 0 }}
                    className="img"
                  >
                    <Image src={EnImg} layout="fill" alt="english-en" />
                  </motion.div>
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
