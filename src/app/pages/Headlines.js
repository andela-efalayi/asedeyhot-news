import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

class Headlines extends Component{

	render(){
		return(
			 <div>
			 	<Header title="Headlines" searchLabel="Search for major headlines..."/>
			 	<Content />
			 </div>
		);
	}
}

export default Headlines;
