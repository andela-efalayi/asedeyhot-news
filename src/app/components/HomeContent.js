import React from 'react';
//import {GridList, GridTile} from 'material-ui/GridList';
//import IconButton from 'material-ui/IconButton';
//import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//import {List, ListItem} from 'material-ui/List';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Explore from 'material-ui/svg-icons/action/explore';



const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="top-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const HomeContent = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <List>
      <Subheader>Available News Sources</Subheader>
      {props.sources.map((source) => (
         <ListItem
         key={source.id}
          rightIconButton={
            <IconMenu iconButtonElement={iconButtonElement} onChange={props.displayHeadlines}>
              <MenuItem 
                rightIcon={<Explore />} 
                value={{'id': source.id, 'sorts': source.sortBysAvailable}}
                >Explore
              </MenuItem>
              <MenuItem rightIcon={<FavoriteBorder />}>Like</MenuItem>
            </IconMenu>
          }
          primaryText={source.name}
          secondaryText={
            <a href={source.url} target="_blank">
              <span style={{color: darkBlack}}>{source.url}</span><br />
            </a>
          }
          secondaryTextLines={2}
        />
      ))}
    </List>
  </MuiThemeProvider>
);

export default HomeContent;