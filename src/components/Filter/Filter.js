import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <>
    <label className="trips-filter__search input">
      <span className="visually-hidden">Search by name</span>
      <input
        name="search"
        type="search"
        placeholder="search by title"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
