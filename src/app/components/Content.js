import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: '100vh',
    overflowY: 'auto',
  },
};

const Content = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.url}
          title={tile.title}
          subtitle={
            <ul>
              <li> <a href={tile.url} target="_blank ">{tile.url} </a></li>
              <li> {tile.author} </li>
            </ul>
          }
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.urlToImage} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default Content;