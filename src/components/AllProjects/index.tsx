/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useContext, useState } from 'react';
import { Header } from 'components/Header';
import { motion } from 'framer-motion';
import { BsSearch, BsFilter } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';

import { propagationContainerVariants } from 'variants/propagationContainerVariants';
import { SettingsContext } from 'contexts/SettingsContext';
import {
  Container,
  SubHeader,
  RightActions,
  SearchContainer,
  OrderingContainer,
  FilteringContainer,
  FilterOption,
} from './styles';
import data from './text-content';

export const AllProjects = () => {
  const [whichBtnIsActive, setWhichBtnIsActive] = useState('');

  const { language } = useContext(SettingsContext);
  const [order, setOrder] = useState(data[language].orderOptions[0]);
  const [filters, setFilters] = useState([] as string[]);

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

  function handleSelectOrder(text: string) {
    setOrder(text);
    setWhichBtnIsActive('');
  }

  function handleToggleFilter(text: string) {
    if (filters.some((t) => t === text)) {
      setFilters((prev) => prev.filter((filter) => filter !== text));
    } else {
      setFilters((prev) => [...prev, text]);
    }
  }
  return (
    <Container
      as={motion.div}
      variants={propagationContainerVariants}
      initial="hidden"
      animate="show"
    >
      <Header isProjectsPage />
      <SubHeader>
        <h2 className="title">{data[language].title}</h2>
        <RightActions>
          <SearchContainer>
            <div className="input-container">
              <BsSearch className="search-icon" />
              <input
                type="text"
                placeholder={data[language].inputPlaceholder}
              />
            </div>
          </SearchContainer>
          <FilteringContainer>
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
                {data[language].filters.map((text) => (
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
          <OrderingContainer>
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
                {data[language].orderOptions.map((text) => (
                  <p onClick={() => handleSelectOrder(text)}>{text}</p>
                ))}
              </div>
            )}
          </OrderingContainer>
        </RightActions>
      </SubHeader>
    </Container>
  );
};
