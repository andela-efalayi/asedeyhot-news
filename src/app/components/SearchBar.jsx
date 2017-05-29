import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { teal500 } from 'material-ui/styles/colors';
import { Toolbar } from 'material-ui/Toolbar';

const styles = {
  underlineStyle: {
    borderColor: teal500,
  },
  hintStyle: {
    color: 'white',
  }
};

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
      hintStyle={styles.hintStyle}
      underlineStyle={styles.underlineStyle} onChange={handleSearch}/>
  </Toolbar>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  title: PropTypes.string
};

export default SearchBar;
