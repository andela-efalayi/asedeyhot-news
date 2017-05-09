import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500, darkBlack } from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Explore from 'material-ui/svg-icons/action/explore';
import MenuItem from 'material-ui/MenuItem';
import Public from 'material-ui/svg-icons/social/public';
import IconMenu from 'material-ui/IconMenu';

import AppActions from '../actions/appActions';
import SourceStore from '../stores/sourceStore';
import SubHeader from '../components/SubHeader';
import HeadlinesPage from '../pages/Headlines';

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
  list: {
    width: 500,
    height: 450,
    margin: 'auto'
  },
  item: {
    width: 300,
    float: 'left',
    borderBottom: 5,
    borderColor: 'black'
  }
};

const test = ["1", "2"];

class AllSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      filteredList: []
    };
    this.onChange = this.onChange.bind(this);
    this.displayHeadlines = this.displayHeadlines.bind(this);
    this.displaySearchResult = this.displaySearchResult.bind(this);
  }
  componentDidMount() {
    SourceStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      sources: this.props.sources,
    });
  }

  displayHeadlines(event, value) {
    if (typeof value === 'object') {
      //console.log(value.id)
      // sortBysAvailable

      localStorage.setItem('sourceId', value.id);
      localStorage.setItem('sourceName', value.name);
      localStorage.setItem('sourceSortBys', value.sortBysAvailable);
      window.location.reload();
    }
  }

  displaySearchResult(event) {
    const key = event.target.value.toLowerCase();
    const filtered = _.filter(this.state.sources, source => _.startsWith(source.name.toLowerCase(), key));
    this.setState({
      filteredList: filtered
    });
  }

  render() {
    // localStorage.removeItem('sourceId');
    // localStorage.removeItem('sourceName');
    // localStorage.removeItem('sourceSortBys');
    
    let body = null;
    let sources = null;
    let subheader = null;
    if (localStorage.sourceId) {
      body = (
        <HeadlinesPage />
      );
    } else {
      subheader = <SubHeader all title='News Sources'
        displaySearchResult={this.displaySearchResult}/>;
      if (this.state.filteredList.length === 0) {
        sources = this.state.sources;
      } else {
        sources = this.state.filteredList;
      }
      body = (
        <List style={styles.root}>
          {sources.map(source => (
             <ListItem
              style={styles.item}
              key={source.id}
              rightIconButton={
                  <IconMenu
                    iconButtonElement={<IconButton><Public /></IconButton>}
                    onChange={this.displayHeadlines}>
                    <MenuItem
                      primaryText="View Headlines"
                      rightIcon={<Explore />}
                      value={source}
                    />
                    <MenuItem
                      primaryText="Add To Favourites"
                      rightIcon={<FavoriteBorder />}
                      value={source.id}
                    />
                  </IconMenu>
              }
              primaryText={source.name}
              secondaryText={<span style={{color: darkBlack }}>{source.url}</span>}
              secondaryTextLines={2}
            />
          ))}
        </List>
      );
    }
    return (
       <MuiThemeProvider muiTheme={muiTheme} style={styles.root}>
        <div>
          {subheader}
          {body}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AllSources;
