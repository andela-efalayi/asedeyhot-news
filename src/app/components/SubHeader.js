import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});

const styles = {
  select: {
    width: 100,
  }
};

const SubHeader = (props) => {
	if (props.all) {
		 return (
			<MuiThemeProvider muiTheme={muiTheme}>
			<Toolbar>
				<ToolbarGroup firstChild={true}>
					<ToolbarTitle text="News Sources" />
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
	}
 return(
	 <MuiThemeProvider muiTheme={muiTheme}>
			<Toolbar noGutter={true}>
				<ToolbarGroup>
					 <IconButton tooltip="Home" 
					 	tooltipPosition="bottom-center"
						 onClick={props.goToHome}>
						<ActionHome />
					</IconButton>
					<ToolbarTitle text={props.title} />
				</ToolbarGroup>
				<ToolbarGroup>
						<SelectField
							floatingLabelText="Sort By"
							style={styles.select}
							onChange={props.showSortedResult}
						>
						{props.sorts.map(sort => (
  						<MenuItem key={sort} value={sort} primaryText={sort}/>
						))}
						</SelectField>
				</ToolbarGroup>
			</Toolbar>
			</MuiThemeProvider>
 );
};

export default SubHeader;
