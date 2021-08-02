/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
  const handleEnterKey = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          className="mt-6 dark:bg-darkMode-primary w-auto"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleEnterKey}
        />
      </div>
    </>
  );
};

export default Search;
