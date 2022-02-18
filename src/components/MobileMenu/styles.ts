import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000050;
  display: none;

  /* @media (max-width: 768px) {
    display: block;
  } */
`;

export const Container = styled.aside`
  display: none;
  flex-direction: column;
  padding: 3.2rem;
  width: 75vw;
  height: 100vh;
  background: #003459;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  ul {
    margin-top: 6.4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .list-item {
      color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      padding: 1.2rem 0.8rem;
      border-bottom: 1px solid #014676;
      transition: color 0.2s ease-in;

      &:hover {
        color: #00a8e8;
      }
      @media (max-width: 468px) {
        font-size: 2rem;
      }
    }
  }
`;
