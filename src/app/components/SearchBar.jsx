import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { Toolbar } from 'material-ui/Toolbar';

/**
 * Displays all a search bar on Sources page
 * @function SearchBar
 * @param {func} handleSearch
 * @return {object} react-component
 */

const SearchBar = ({ handleSearch }) => (
   <Toolbar className="filter">
    <TextField
      hintText="Search for a news source" fullWidth
      onChange={handleSearch}/>
  </Toolbar>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func
};

export default SearchBar;
