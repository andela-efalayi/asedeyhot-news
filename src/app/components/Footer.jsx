import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const Footer = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme} className="container-fluid">
      <footer >
        <p>made with <FavoriteBorder/> by: Esther Falayi | Andela Nigeria</p>
      </footer>
    </MuiThemeProvider>
  );
};

export default Footer;
