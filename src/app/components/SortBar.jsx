import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { lightBlue500 } from 'material-ui/styles/colors';

const styles = {
  underlineStyle: {
    borderColor: lightBlue500,
  }
};

class SortBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  render() {
    return (
      <Toolbar id={this.props.id} className="toolbar">
        <ToolbarGroup>
          <h4 className="sortBarTitle">{this.props.title}
            <span> - {this.props.currentSortOption}</span>
          </h4>
        </ToolbarGroup>
        <ToolbarGroup>
          <SelectField underlineStyle={styles.underlineStyle}
          floatingLabelText="SortBy Options"
          onChange={this.props.filterHeadlines}
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
  id: PropTypes.string,
  title: PropTypes.string,
  sortOptions: PropTypes.array,
  filterHeadlines: PropTypes.func
};

SortBar.defaultProps = {
  currentSortOption: null,
  id: null,
  title: null,
  sortOptions: [],
  filterHeadlines: null
};


export default SortBar;

