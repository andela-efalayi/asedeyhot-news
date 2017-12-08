import React, { Component } from 'react';
// import GoogleLogin from 'react-google-login';
// import { Link } from 'react-router-dom';
import AutoCompleteField from './AutoCompleteField.jsx';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import createAutoValues from '../helpers/createAutoValues';

/**
 * Display home page if authentication is unsuccessful
 * @function authFail
 * @param {object} response
 * @return {void}
 */
const authFail = (response) => {
  return response;
};

/**
 * Directs user to home page (sources page) if authentication is successful
 * @function authSuccess
 * @param {object} response
 * @return {void}
 */
const authSuccess = (response) => {
  // Save profile info from response in an object
  const user = {
    name: response.profileObj.givenName,
    imageUrl: response.profileObj.imageUrl,
    googleId: response.profileObj.googleId,
    isSignedIn: true
  };

  // Set user in localStorage
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = '#/sources';
  window.location.reload();
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsSources: NewsSourcesStore.loadAllSources()
    };
    this.onSourcesChange = this.onSourcesChange.bind(this);
  }

  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.onSourcesChange);
  }

  componentWillUnmount() {
    NewsSourcesStore.removeChangeListener(this.onSourcesChange);
  }

  onSourcesChange() {
    this.setState({
      newsSources: NewsSourcesStore.loadAllSources()
    });
  }


  render() {
    return (
      <div className="landing-page">
        <div className="login">
          <h3>{`Browse through ${this.state.newsSources.length} news sources 
        from around the globe`}</h3>
          <AutoCompleteField
            dataSource={createAutoValues(this.state.newsSources)}
          />
          {/* <GoogleLogin
      clientId=
      "126684501762-qf76j1u8hfsqc1lh4emjg2h4s18si0o3.apps.googleusercontent.com"
      buttonText="SignIn With Google+"
      onSuccess={authSuccess} onFailure={authFail} />
      <p><Link to={{
        pathname: '/sources'
      }}>or browse through our different news sources</Link></p> */}
        </div></div>
    );
  }
}

export default Home;
