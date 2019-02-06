import React from 'react';
import { visibilityFilter } from '../actions';
import FilterLink from "../containers/FilterLink";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilter;

const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter={SHOW_ALL}>
        ALL
      </FilterLink>
      {', '}
      <FilterLink filter={SHOW_ACTIVE}>
        Active
      </FilterLink>
      {', '}
      <FilterLink filter={SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </p>
  );
};

export default Footer;