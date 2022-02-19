import Image from 'next/image';
import { Link } from 'react-scroll';

import { Header } from 'components/Header';
import arrow from 'assets/arrow.svg';
import { Container, MainInfos } from './styles';
import texts from './text-content';

export const InitialScreen = () => {
  console.log('');

  return (
    <Container>
      <Header />
      <MainInfos>
        <p className="uptitle">{texts.pt.mainInfos.uptitle}</p>
        <h2 className="name">{texts.pt.mainInfos.name}</h2>
        <h3 className="subtitle">{texts.pt.mainInfos.subtitle}</h3>
        <p className="description">{texts.pt.mainInfos.description}</p>
      </MainInfos>
      <div className="arrow-icon">
        <Link to="about" smooth="true" offset={-24}>
          <Image src={arrow} layout="fill" />
        </Link>
      </div>
    </Container>
  );
};
