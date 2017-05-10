import React, { Component } from 'react';
import _ from 'lodash';

import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Public from 'material-ui/svg-icons/social/public';
import PowerSettingNew from 'material-ui/svg-icons/action/power-settings-new';

import SourceStore from '../stores/sourceStore';
import MainHeader from '../components/MainHeader';
import UserAvatar from '../components/UserAvatar';
import NewsSources from '../pages/NewsSources';
import Headlines from '../pages/Headlines';
import InitialiseApp from '../actions/initialise';

InitialiseApp.init();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      value: 'home',
      filteredList: []
    };
    this.onChange = this.onChange.bind(this);
    this.displaySearchResult = this.displaySearchResult.bind(this);
  }

  componentWillMount() {
    SourceStore.addChangeListener(this.onChange);
    let title = null;
    if (this.props.allSources) {
  	  title = 'News Sources';
  	}
  	this.setState({
    title
  });
  }

  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onChange);
  }

  changeTab = (value) => {
     this.setState({
      value: value,
    });
     if (value === 'signout') {
      localStorage.removeItem('userName');
      localStorage.removeItem('userImg');
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
   };

  displaySearchResult(event, value) {
    const key = event.target.value.toLowerCase();
    const filtered = _.filter(this.state.sources, source => _.startsWith(source.name.toLowerCase(), key));
    this.setState({
      filteredList: filtered
    });
  }

  onChange() {
    this.setState({
      sources: SourceStore.getSources()
    });
  }

  showHeadlines = (event, value) => {
    localStorage.setItem('sourceName', value.name);
    localStorage.setItem('sourceId', value.id);
    localStorage.setItem('sortBys', value.sortBysAvailable);
    window.location.reload();
  }

  render() {
    let home = null;
    let displayedSources = null;
    if (localStorage.sourceId) {
      home = <Headlines />;
    } else {
      if (this.state.filteredList.length === 0) {
        displayedSources = this.state.sources;
      } else {
        displayedSources = this.state.filteredList;
      }
      home = (
        <NewsSources sources={displayedSources}
            showHeadlines={this.showHeadlines}
            displaySearchResult={this.displaySearchResult}/>
      );
    }
    return (
		<MuiThemeProvider muiTheme={muiTheme}>
		  <div>
        <MainHeader
        userAvatar={<UserAvatar
        userName={localStorage.userName}
        userImg={localStorage.userImg}/>}/>
        <Tabs
          value={this.state.value}
          onChange={this.changeTab}>
          <Tab
            icon={<Public />}
            value="home"
            label="Home">
            <div>
              {home}
            </div>
          </Tab>
          <Tab
            icon={<FavoriteBorder />}
            value="favourites"
            label="Favorites">
            <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                <div style={styles.container}>
                  <h1>Coming Soon </h1>
                </div>
              </div>
            </MuiThemeProvider>
          </Tab>
          <Tab
            icon={<PowerSettingNew />}
            value="signout"
            label="SignOut">
             <MuiThemeProvider muiTheme={muiTheme}>
              <div>
                <div style={styles.container}>
                  <h2>Signing user out...</h2>
                </div>
              </div>
            </MuiThemeProvider>
          </Tab>
        </Tabs>
      </div>
	  </MuiThemeProvider>
    );
  }
}

export default HomePage;
