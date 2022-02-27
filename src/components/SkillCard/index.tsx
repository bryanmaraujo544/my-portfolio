import { motion } from 'framer-motion';
import { Container } from './styles';

export const SkillCard = ({ text }: { text: string }) => {
  console.log(text);
  return (
    <Container as={motion.div} layout>
      <p>{text}</p>
      <div className="square" />
    </Container>
  );
};
