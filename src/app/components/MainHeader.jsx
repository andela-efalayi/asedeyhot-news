import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/social/whatshot';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  title: {
    cursor: 'pointer'
  },
  appBar: {
    paddingTop: '10px',
    paddingBottom: '10px'
  }
};

const MainHeader = ({ userInfo }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar style={styles.appBar}
        title={<span style={styles.title}>AsEDeyHot</span>}
        iconElementLeft={<IconButton><Logo /></IconButton>}
        iconElementRight={userInfo}
      />
    </MuiThemeProvider>
  );
};

MainHeader.propTypes = {
  userInfo: PropTypes.object
};
MainHeader.defaultProps = {
  userInfo: null
};
export default MainHeader;
