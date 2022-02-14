import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
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

export const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
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
        <ul>
          {texts.pt.listSections.map(({ title }) => (
            <li className="list-item">{title}</li>
          ))}
        </ul>
      </Container>
    </Overlay>
  );
};
