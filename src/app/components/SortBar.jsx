import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * Displays all a sort bar on Articles page
 * @class SortBar
 * @extends {Component}
 * @param {string} currentSortOption
 * @param {string} title
 * @param {array} sortOption
 * @param {func} updateArticles
 */

class SortBar extends Component {
  render() {
    return (
      <Toolbar className="filter">
        <ToolbarGroup>
          <h4 className="sortBarTitle">{this.props.title}
            <span> - {this.props.currentSortOption} News</span>
          </h4>
        </ToolbarGroup>
        <ToolbarGroup className="select">
          <SelectField
          floatingLabelText="SortBy Options"
          onChange={this.props.updateArticles}
          >
            {this.props.sortOptions.map(option => (
              <MenuItem key={option} value={option} primaryText={option}
              />
            ))}
          </SelectField>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

SortBar.propTypes = {
  currentSortOption: PropTypes.string,
  title: PropTypes.string,
  sortOptions: PropTypes.array,
  updateArticles: PropTypes.func
};

export default SortBar;

