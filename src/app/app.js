import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component

import LoginPage from './pages/LoginPage';
import Headlines from './pages/Headlines';
import NewsSources from './pages/NewsSources';
import Home from './pages/Home';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component{
	render(){
		var Page;
		switch(this.props.route){
			case '/headlines': Page = Headlines; break;
			case '/home': Page = Home; break;
			case '/newssources': Page = NewsSources; break;
			default: Page = LoginPage;
		}

		return(
			<div>
				<Page />
			</div>
		);
	}
}

const renderPage = () => {
	var route = window.location.hash.substr(1);
	console.log(route);
	render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', renderPage);
renderPage();



