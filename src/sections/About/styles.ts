import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: -9.6rem;

  .title {
    text-align: center;
  }

  .main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const TextContainer = styled.div`
  p {
    color: #fff;

    & + p {
      margin-top: 2rem;
    }

    b {
      color: #00a8e8;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 4.8rem;
  }

  .image {
    position: relative;
    width: 25.6rem;
    height: 25.6rem;

    @media (max-width: 768px) {
      width: 20rem;
      height: 20rem;
    }

    img {
      object-fit: contain;
    }

    &::before {
      content: '';
      position: absolute;
      top: 64px;
      right: -32px;
      width: 85%;
      height: 85%;
      border: 2px solid #00a8e8;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
