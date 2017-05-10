import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/social/whatshot';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  title: {
    cursor: 'pointer'
  }
};

const MainHeader = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar
        title={<span style={styles.title}>AsEDeyHot</span>}
        iconElementLeft={<IconButton><Logo /></IconButton>}
        iconElementRight={props.userAvatar}
      />
    </MuiThemeProvider>
  );
};

export default MainHeader;
