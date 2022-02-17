import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  width: 100%;
  margin-top: 6.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 40rem;

    @media (max-width: 768px) {
      height: 30rem;
      width: 100%;
    }

    img {
      object-fit: cover;
    }

    width: calc(100% + 4.8rem);
  }

  .infos-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
      align-items: center;
      margin-top: 3.2rem;
    }
  }
`;

export const Uptitle = styled.p`
  font-size: 1.6rem;
  color: #00a8e8;
`;

export const Title = styled.h4`
  font-size: 3.2rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.25;
`;

export const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  min-height: 8rem;
  margin: 1.6rem 0;
  background: #003459;
  width: calc(100% + 4.8rem);
  z-index: 10;
  border-radius: 0.2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    color: #fff;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 1.6rem;

  .tag {
    color: #adb5bd;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: 1.6rem;

  .btn {
    background: none;

    .icon {
      font-size: 2.6rem;
      color: #adb5bd;
    }
  }
`;
