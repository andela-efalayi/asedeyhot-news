import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { blue900 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './Routes';

import MainHeader from './components/MainHeader.jsx';
import UserAvatar from './components/UserAvatar.jsx';
import HomeTabs from './components/HomeTabs.jsx';
import Footer from './components/Footer.jsx';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue900,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      view: null
    };
  }
  componentWillMount = () => {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({
        userInfo: (
          <UserAvatar user={user}/>
        ),
        view: {
          title: 'home',
          route: '#/sources'
        }
      });
    }
  }
  render() {
    return (
      <div>
        <MainHeader userInfo={this.state.userInfo}/>
        <MuiThemeProvider muiTheme={muiTheme}>
          <HomeTabs />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Routes />
        </MuiThemeProvider>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('app'));
