import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Overlay } from './styles';
import texts from './text-content';

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

  useEffect(() => {
    if (isMenuOpen) {
      animateControl.start('show');
    } else {
      animateControl.start('hidden');
    }
  }, [isMenuOpen]);

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
          {texts.pt.listSections.map(({ title }) => (
            <li className="list-item">{title}</li>
          ))}
        </ul>
      </Container>
    </Overlay>
  );
};
