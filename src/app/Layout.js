import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import InitialiseApp from './actions/initialise';

InitialiseApp.init();

class Layout extends Component {
  render() {
    if (localStorage.userName) {
      return (
        <HomePage />
      );
    }
    return (
      <LoginPage />
    );
  }
}

export default Layout;
