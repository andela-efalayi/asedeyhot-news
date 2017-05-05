import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/social/whatshot';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  container: {
    textAlign: 'center',
    paddingTop: 200,
  }, 
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const avatarStyle = {
  right: 1
};
// https://dummyimage.com/600x400/cccccc/000010'

const AppUserInfo = () => (
   <ListItem
    primaryText="Esther Falayi"
    insetChildren={true}
    rightAvatar={<Avatar src="https://dummyimage.com/600x400/cccccc/000010"
    style={avatarStyle} />}
  />
);

class Header extends Component{
  render(){
    return(
     <div>
       <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title={<span style={styles.title}>AsEDeyHot</span>}
          iconElementLeft={<IconButton><Logo /></IconButton>}
          onTitleTouchTap={handleTouchTap}
          iconElementRight={<AppUserInfo />}
        />
       
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text={this.props.title} />
            <ToolbarSeparator />
          </ToolbarGroup>
          <ToolbarGroup>
            <TextField
              floatingLabelText={this.props.searchLabel}
              type="text"
              value={this.props.searchString}
              onChange={this.props.handleSearch}
            />
            <RaisedButton label="Primary" primary={true}/>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider >
     </div>
    );
  }

}

export default Header
