import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Headlines from './pages/Headlines';
import HomePage from './pages/HomePage';

const Routes = () => {
  return (
	<main>
		<Route exact path='/' component={LoginPage} />
		<Route name='asedeyhot' path="/asedeyhot" component={HomePage} />
		<Route name='headlines' path='/asedeyhot/:id' component={Headlines}/>
	</main>
  );
};

export default Routes;
