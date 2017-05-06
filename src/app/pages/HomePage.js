import React, { Component } from 'react';
import Header from '../components/Header';
import AppActions from '../actions/appActions';
import SourceStore from '../stores/sourceStore';
import HeadlineStore from '../stores/headlineStore';

import HomeContent from '../components/HomeContent';
import _ from 'lodash';


class Home extends Component{
	constructor(){
		super();
		this.state = {
			sources: [],
			searchString: '',
			filteredList: []
		};
		this.onChange = this.onChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.displayHeadlines = this.displayHeadlines.bind(this);
	}

	componentWillMount() {
    SourceStore.addChangeListener(this.onChange);
  }

  componentDidMount(){
  	AppActions.getSources();
  }

  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onChange);
  }

	onChange(){
		this.setState({
			sources: SourceStore.getSources()
		});
	}

	handleSearch(event){
		let key = event.target.value.toLowerCase();
		let filtered = _.filter(this.state.sources, source => _.startsWith(source.name.toLowerCase(), key ));
		this.setState({
			searchString: event.target.value,
			filteredList: filtered
		});
	}

	displayHeadlines(event, value){
		console.log(value);
		AppActions.getHeadlines(value);
		//window.location.href = value.url;
	}
	
	render(){
		let sources = null;
		if (this.state.searchString) {
			sources = this.state.filteredList;
		}
		else{
			sources = this.state.sources;
		}
		return(
			<div>
				<Header 
					title="All News Sources" searchLabel="Search" 
					searchString={this.state.searchString} 
					handleSearch={this.handleSearch}  
				/>
				<HomeContent 
					sources={sources}
					displayHeadlines={this.displayHeadlines}/>
			</div>
		);
	}
}

export default Home;
