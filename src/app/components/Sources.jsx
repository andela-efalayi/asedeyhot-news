import React, { Component } from 'react';
import _ from 'lodash';

import AppStore from '../store/AppStore';
import SourceCard from './SourceCard.jsx';
import SearchBar from './SearchBar.jsx';
import loadSources from '../actions/LoadSources';

class Sources extends Component {
  constructor() {
    super();
    this.state = {
      filteredList: [],
      sources: []
    };
    this.onChange = this.onChange.bind(this);
    this.searchPage = this.searchPage.bind(this);
  }
  componentDidMount = () => {
    loadSources();
    AppStore.addChangeListener(this.onChange);
  }
  componentWillUnmount = () => {
    AppStore.removeChangeListener(this.onChange);
  }
  onChange = () => {
    this.setState({
      sources: AppStore.getSources()
    });
  }
  searchPage = (event) => {
    const key = event.target.value.toLowerCase();
    const filtered = _.filter(this.state.sources,
    source => _.startsWith(source.name.toLowerCase(), key));
    this.setState({
      filteredList: filtered
    });
  }

  render() {
    let sources = null;
    if (this.state.filteredList.length === 0) {
      sources = this.state.sources;
    } else {
      sources = this.state.filteredList;
    }
    return (
     <div>
       <SearchBar searchPage={this.searchPage}/>
        <div className="container-fluid">
          <div className="row">
            {sources.map(source => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
     </div>
    );
  }

}
export default Sources;
