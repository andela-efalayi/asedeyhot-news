import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes'

injectTapEventPlugin();

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}

const app = document.getElementById('app');

ReactDom.render( <App />, app);
