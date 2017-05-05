import React from 'react';
import Router, { DefaultRoute }, { Route } from 'react-router';

import LoginPage from './pages/LoginPage';
import Headlines from './pages/Headlines';
import NewsSources from './pages/NewsSources';
import Home from './pages/Home';


const routes = (
	<Route name="app" path='/' handler={LoginPage}>
		<DefaultRoute handler={Home}/>
		<Route name='headlines' handler={Headlines} />
		<Route name='newssources' handler={NewsSources} />
	</Route>
);

export deafult routes;
