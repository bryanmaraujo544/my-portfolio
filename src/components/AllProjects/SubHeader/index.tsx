/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-use-before-define */
import { useContext, useEffect } from 'react';
import { BsSearch, BsFilter } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';

import { SettingsContext } from 'contexts/SettingsContext';
import { useClickOutside } from 'hooks/useClickOutside';
import data from '../text-content';
import {
  Container,
  RightActions,
  SearchContainer,
  OrderingContainer,
  FilteringContainer,
  FilterOption,
} from './styles';

interface Props {
  setOrder: any;
  setWhichBtnIsActive: any;
  setFilters: any;
  filters: string[];
  whichBtnIsActive: string;
  order: string;
}

export const SubHeader = ({
  setOrder,
  setWhichBtnIsActive,
  setFilters,
  filters,
  whichBtnIsActive,
  order,
}: Props) => {
  const { language } = useContext(SettingsContext);

  const filterRef = useClickOutside(() => closeFilter());
  const orderRef = useClickOutside(() => closeOrder());

  useEffect(() => {
    // When the languages changes, I'm setting the value of the order text to the current language.
    const indexOfOrder =
      data[language === 'pt' ? 'en' : 'pt'].orderOptions.indexOf(order);
    setOrder(
      data[language].orderOptions[indexOfOrder === -1 ? 0 : indexOfOrder]
    );
  }, [language]);

  function handleSelectOrder(text: string) {
    setOrder(text);
    setWhichBtnIsActive('');
  }

  function handleToggleFilter(text: string) {
    if (filters.some((t: string) => t === text)) {
      setFilters((prev: any) => prev.filter((filter: any) => filter !== text));
    } else {
      setFilters((prev: any) => [...prev, text]);
    }
  }

  function handleToggleFilterBtn() {
    if (whichBtnIsActive === 'filter') {
      setWhichBtnIsActive('');
    } else {
      setWhichBtnIsActive('filter');
    }
  }

  function handleToggleOrderBtn() {
    if (whichBtnIsActive === 'order') {
      setWhichBtnIsActive('');
    } else {
      setWhichBtnIsActive('order');
    }
  }

  function closeFilter() {
    if (whichBtnIsActive === 'filter') {
      setWhichBtnIsActive('');
    }
  }

  function closeOrder() {
    if (whichBtnIsActive === 'order') {
      setWhichBtnIsActive('');
    }
  }

  return (
    <Container>
      <h2 className="title">{data[language].title}</h2>
      <RightActions>
        <SearchContainer>
          <div className="input-container">
            <BsSearch className="search-icon" />
            <input type="text" placeholder={data[language].inputPlaceholder} />
          </div>
        </SearchContainer>
        <FilteringContainer ref={filterRef}>
          <button
            className="filter-btn"
            type="button"
            onClick={handleToggleFilterBtn}
          >
            {data[language].filterButton}
            <BsFilter />
            {filters.length > 0 && <div className="circle" />}
          </button>
          {whichBtnIsActive === 'filter' && (
            <div className="filtering-container">
              {data[language].filters.map((text: string) => (
                <FilterOption
                  isSelected={filters.some((t) => t === text)}
                  onClick={() => handleToggleFilter(text)}
                >
                  {text}
                </FilterOption>
              ))}
            </div>
          )}
        </FilteringContainer>
        <OrderingContainer ref={orderRef}>
          <button
            className="order-btn"
            type="button"
            onClick={handleToggleOrderBtn}
          >
            {data[language].orderButton} {order}
            <BiDownArrow className="arrow-icon" />
          </button>
          {whichBtnIsActive === 'order' && (
            <div className="ordering-container">
              {data[language].orderOptions.map((text: string) => (
                <p onClick={() => handleSelectOrder(text)}>{text}</p>
              ))}
            </div>
          )}
        </OrderingContainer>
      </RightActions>
    </Container>
  );
};
