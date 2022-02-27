import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 4.8rem);
  min-width: 45%;
  padding: 2.4rem;
  background: #fff;
  font-size: 1.8rem;
  z-index: 1;
  transform-style: preserve-3d;

  @media (max-width: 468px) {
    text-align: center;
    min-height: calc(100% - 4.8rem);
    height: auto;
  }

  &::after {
    content: '';
    position: absolute;
    left: 1.2rem;
    top: 1.2rem;
    width: 100%;
    height: 100%;
    border: 0.2rem solid #00a8e8;
    /* z-index: -1; */
    transform: translateZ(-1px);
  }
`;
