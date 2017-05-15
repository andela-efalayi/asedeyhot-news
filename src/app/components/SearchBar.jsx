import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { Toolbar } from 'material-ui/Toolbar';

const styles = {
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const SearchBar = ({ searchPage }) => (
   <Toolbar>
    <TextField
      hintText="Search for a news source" fullWidth
      underlineStyle={styles.underlineStyle} onChange={searchPage}/>
  </Toolbar>
);

SearchBar.propTypes = {
  searchPage: PropTypes.func,
  title: PropTypes.string
};

SearchBar.defaultProps = {
  searchPage: null,
  title: null
};

export default SearchBar;
