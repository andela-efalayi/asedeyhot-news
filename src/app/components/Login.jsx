import React from 'react';
import GoogleLogin from 'react-google-login';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const authFail = (response) => {
  return response;
};

const authSuccess = (response) => {
  const user = {
    name: response.profileObj.givenName,
    imageUrl: response.profileObj.imageUrl,
    googleId: response.profileObj.googleId,
    isSignedIn: true
  };
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = '#/sources';
  window.location.reload();
};

const Login = () => {
  return (
     <div style={styles.container}>
      <h3> Get latest, popular, and top news from around the globe </h3>
      <GoogleLogin
      clientId=
      "126684501762-qf76j1u8hfsqc1lh4emjg2h4s18si0o3.apps.googleusercontent.com"
      buttonText="SignIn With Google+"
      onSuccess={authSuccess} onFailure={authFail} />
    </div>
  );
};

export default Login;
