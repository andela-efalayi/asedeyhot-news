import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import { autoComplete } from '../muiTheme';

const styles = {
  menu: {
    borderColor: '#159588'
  }
};

const AutoCompleteField = ({ dataSource }) => (
  <div className="autocomplete-field">
    <MuiThemeProvider muiTheme={autoComplete}>
      <AutoComplete
        hintText="Enter a news source (e.g BBC)"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={dataSource}
        disableFocusRipple
        fullWidth
        menuStyle={styles.menu}
      />
    </MuiThemeProvider>
  </div>
);

export default AutoCompleteField;
