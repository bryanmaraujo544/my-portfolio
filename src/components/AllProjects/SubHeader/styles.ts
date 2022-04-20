import styled from 'styled-components';

interface FilterOptionProps {
  isSelected: boolean;
}

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.2rem;
  height: 4.8rem;
  z-index: 999;

  .title {
    font-size: 2.4rem;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  height: 100%;
`;

export const SearchContainer = styled.form`
  height: 100%;
  z-index: 9999;

  .input-container {
    display: flex;
    background: #003459;
    align-items: center;
    height: 100%;
    padding: 0 1.6rem;
    border-radius: 0.2rem;

    .search-icon {
      color: #e9ecef;
      font-size: 2rem;
    }

    input {
      width: 100%;
      background: none;
      border: 0;
      height: 100%;
      padding: 1.6rem 1.2rem;
      font-weight: 600;
      color: #e9ecef;

      &::placeholder {
        color: #ced4da;
      }
    }
  }
`;

export const OrderingContainer = styled.div`
  height: 100%;
  z-index: 9999;

  .order-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
    height: 100%;

    font-weight: 600;
    background: #003459;
    color: #e9ecef;
    height: 100%;
    border-radius: 0.2rem;
  }

  .ordering-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background: #003459;
    margin-top: 0.8rem;
    padding: 0.8rem 0.4rem;
    border-radius: 0.2rem;

    p {
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 0.2rem;

      &:hover {
        background: #007ea7;
      }
    }
  }
`;

export const FilteringContainer = styled.div`
  height: 100%;
  z-index: 9999;

  .filter-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem;
    height: 100%;

    font-weight: 600;
    background: #003459;
    color: #e9ecef;
    height: 100%;
    border-radius: 0.2rem;

    .circle {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 9999rem;
      background: #00a8e8;
      /* margin-left: -0.4rem; */
    }
  }

  .filtering-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background: #003459;
    margin-top: 0.8rem;
    padding: 0.8rem 0.4rem;
    border-radius: 0.2rem;
  }
`;

export const FilterOption = styled.p<FilterOptionProps>`
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background: ${({ isSelected }) => (isSelected ? '#007ea7' : 'none')};

  &:hover {
    background: #007ea760;
  }
`;
