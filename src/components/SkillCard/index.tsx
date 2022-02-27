import { Container } from './styles';

export const SkillCard = ({ text }: { text: string }) => {
  console.log(text);
  return (
    <Container>
      <p>{text}</p>
      <div className="square" />
    </Container>
  );
};
