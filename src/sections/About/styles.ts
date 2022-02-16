import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 300px;
  margin-bottom: 64px;

  .title {
    text-align: center;
  }

  .main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin-top: 6.4rem;
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

  .image {
    position: relative;
    width: 25.6rem;
    height: 25.6rem;

    &::before {
      content: '';
      position: absolute;
      top: 64px;
      right: -32px;
      width: 85%;
      height: 85%;
      border: 2px solid #00a8e8;
    }
  }
`;
