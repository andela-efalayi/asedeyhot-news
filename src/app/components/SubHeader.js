import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});

const SubHeader = (props) => {
  return (
		<MuiThemeProvider muiTheme={muiTheme}>
		<Toolbar noGutter={true}>
		  <ToolbarGroup>
		  	<FlatButton label={props.title} />
		    <Subheader>{props.subtitle}</Subheader>
		  </ToolbarGroup>
		 	<ToolbarGroup lastChild={true}>
		 		 <TextField
		      floatingLabelText="Search"
		      type="text"
		      onChange={props.displaySearchResult}
		    />
		 	</ToolbarGroup>
		</Toolbar>
		</MuiThemeProvider>
	);
};

export default SubHeader;
