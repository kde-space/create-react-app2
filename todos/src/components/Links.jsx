import React from 'react';
import * as Actions from '../actions';
import Link from './Link';

const filterNames = Object.keys(Actions.visibilityFilter);

const Links = ({ onSetVisibilityFilter, visibilityFilter }) => {
  return (
    <div>
      filter: {filterNames.map(filterName => (
      <Link
        key={filterName}
        onSetVisibilityFilter={onSetVisibilityFilter}
        filterName={filterName}
        isMatchFilter={visibilityFilter === filterName}
      />
    ))}
    </div>
  );
};

export default Links;