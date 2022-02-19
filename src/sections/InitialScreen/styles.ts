import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;

  .arrow-icon {
    width: 3.6rem;
    height: 3.6rem;
    position: relative;
    margin: 0 auto;
    margin-top: 4.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: scale(1.01);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const MainInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 4.8rem;

  .uptitle {
    color: #00a8e8;
  }

  .name {
    font-size: 7.2rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1.2rem;
    line-height: 1.2;

    @media (max-width: 468px) {
      font-size: 5.6rem;
    }
  }

  .subtitle {
    font-size: 4.8rem;
    color: #adb5bd;

    @media (max-width: 468px) {
      font-size: 3.6rem;
    }
  }

  .description {
    font-size: 1.6rem;
    max-width: 550px;
    text-align: center;
    color: #adb5bd;
    margin-top: 2rem;
  }
`;
