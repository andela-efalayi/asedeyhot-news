import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { teal500, teal100, cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Logo from 'material-ui/svg-icons/social/whatshot';
import AppBar from 'material-ui/AppBar';
import Routes from './Routes';
import UserAvatar from './components/UserAvatar.jsx';
import HomeTabs from './components/HomeTabs.jsx';
import '../www/main.scss';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: cyan500,
    accent2Color: teal100,
    primary1Color: teal500,
    primary3Color: teal500
  },
});

/**
 * Entry point to app
 * @class App
 * @extends {Component}
 * @param {object} props
 * @return {object} react-component
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      tabs: null
    };
  }

  /**
   * @memberof App
   * @method componentWillMount
   * @return {void}
   */
  componentWillMount = () => {
    // Sets state for userInfo and tabs if localStorage.user is true
    if (localStorage.user) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({
        userInfo: (
          <UserAvatar user={user}/>
        ),
        tabs: (
          <MuiThemeProvider muiTheme={muiTheme}>
            <HomeTabs />
          </MuiThemeProvider>
        )
      });
    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar
              className="app-bar"
              title={<span>AsEDeyHot</span>}
              iconElementLeft={<IconButton><Logo /></IconButton>}
              iconElementRight={this.state.userInfo}
            />
          </MuiThemeProvider>
          {this.state.tabs}
        </div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Routes/>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme} className="container-fluid">
          <footer>
            <p>made with<span className="footer-icon">♡</span>
            by: Esther Falayi | Andela, Nigeria</p>
          </footer>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('app'));
