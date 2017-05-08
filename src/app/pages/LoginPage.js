import React, { Component } from 'react';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GoogleLogin from 'react-google-login';
import MainHeader from '../components/MainHeader';

const styles = {
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

const authSuccess = (response) => {
  localStorage.setItem('userName', response.profileObj.name);
  localStorage.setItem('userImg', response.profileObj.imageUrl);
};

const authFail = (response) => {
  console.log('User Authentication Failed: ', response);
};

class LoginPage extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={muiTheme}>
	      <div>
	      	<MainHeader />
	      	<div style={styles.container}>
	          <h4>A News Feed Application </h4>
	           <GoogleLogin
					    clientId="126684501762-qf76j1u8hfsqc1lh4emjg2h4s18si0o3.apps.googleusercontent.com"
					    buttonText="SignIn With Google+"
					    onSuccess={authSuccess}
					    onFailure={authFail}
					  />
	        </div>
	      </div>
      </MuiThemeProvider>
    );
  }
}

export default LoginPage;