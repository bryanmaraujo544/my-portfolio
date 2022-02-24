import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineClose, AiOutlineSetting } from 'react-icons/ai';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';
import { useSound } from 'hooks/useSound';

import { SettingsContext } from 'contexts/SettingsContext';
import { Container, Overlay, ConfigContainer } from './styles';
import texts from './text-content';
import PopSound from '../../../public/pop_drip.mp3';
// import ClickSound from '../../../public/click_04.mp3';
import PtImg from '../../assets/portuguese.png';
import EnImg from '../../assets/english.jpg';

const OverlayVariants = {
  hidden: {
    opacity: 0,
    display: 'none',
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    display: 'block',
    transition: {
      when: 'beforeChildren',
    },
  },
};

const MenuVariants = {
  hidden: { right: '-100%' },
  show: { right: 0 },
};

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const animateControl = useAnimation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // prettier-ignore
  // eslint-disable-next-line max-len
  const { isSoundOn, language, handleToggleLanguage, handleToggleSound } = useContext(SettingsContext);

  const [playPop] = useSound(PopSound);

  useEffect(() => {
    if (isMenuOpen) {
      animateControl.start('show');
    } else {
      animateControl.start('hidden');
      setIsSettingsOpen(false);
    }
  }, [isMenuOpen]);

  function handleToggleSettings() {
    playPop();
    setIsSettingsOpen((prevState) => !prevState);
  }

  return (
    <Overlay
      as={motion.div}
      variants={OverlayVariants}
      animate={animateControl}
    >
      <Container as={motion.aside} variants={MenuVariants}>
        <AiOutlineClose
          onClick={() => setIsMenuOpen(false)}
          className="close-icon"
        />
        <ul>
          {texts[language].listSections.map(({ title }) => (
            <li key={title} className="list-item">
              {title}
            </li>
          ))}
        </ul>
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
              x: isSettingsOpen ? 0 : -24,
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
                  <Image src={PtImg} layout="fill" />
                </motion.div>

                <motion.div
                  animate={{ opacity: language === 'en' ? 1 : 0 }}
                  className="img"
                >
                  <Image src={EnImg} layout="fill" />
                </motion.div>
              </div>
            </button>
          </motion.div>
        </ConfigContainer>
      </Container>
    </Overlay>
  );
};
