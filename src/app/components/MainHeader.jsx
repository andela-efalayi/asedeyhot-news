import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/social/whatshot';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  title: {
    cursor: 'pointer'
  },
  signoutBtn: {
    height: '48px'
  },
  appBar: {
    paddingTop: '10px',
    paddingBottom: '15px'
  }
};

const MainHeader = ({ userInfo }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar style={styles.appBar}
        title={<span style={styles.title}>AsEDeyHot</span>}
        iconElementLeft={<IconButton><Logo /></IconButton>}
        iconElementRight={<FlatButton style={styles.signoutBtn}>
          {userInfo}</FlatButton>}
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
