/* global localStorage */
import React, { Component } from 'react';
import AppStore from '../stores/AppStore';
import HeadlineCard from './HeadlineCard.jsx';
import SortBar from './SortBar.jsx';
import AppActions from '../actions/appActions';


class Headlines extends Component {
  constructor() {
    super();
    this.state = {
      currentSortOption: 'top',
      currentSource: JSON.parse(localStorage.getItem('source')),
      topHeadlines: [],
      sortResult: AppStore.getSortResult(),
      user: JSON.parse(localStorage.getItem('user'))
    };
    this.onChange = this.onChange.bind(this);
    this.filterHeadlines = this.filterHeadlines.bind(this);
  }
  componentDidMount = () => {
    AppActions.getHeadlines(this.state.currentSource.id);
    AppStore.addChangeListener(this.onChange);
  }
  componentWillUnmount = () => {
    AppStore.removeChangeListener(this.onChange);
  }
  onChange = () => {
    this.setState({
      topHeadlines: AppStore.getHeadlines(),
      sortResult: AppStore.getSortResult()
    });
  }
  filterHeadlines = (event, index, value) => {
    this.setState({
      currentSortOption: value,
    });
    AppActions.getParticularSort(this.state.currentSource.id, value);
  }
  render() {
    let headlinesToBeDisplayed = null;
    if (this.state.sortResult.length !== 0) {
      headlinesToBeDisplayed = this.state.sortResult;
    } else {
      headlinesToBeDisplayed = this.state.topHeadlines;
    }
    return (
      <div>
        <SortBar id={this.state.currentSource.id}
          title={this.state.currentSource.name}
          sortOptions={this.state.currentSource.sortBysAvailable}
          currentSortOption={this.state.currentSortOption}
          filterHeadlines={this.filterHeadlines}
        />
        <div className="container-fluid">
          <div className="row">
            {headlinesToBeDisplayed.map(headline => (
              <HeadlineCard key={headline.title}
              headline={headline} googleId={this.state.user.googleId} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Headlines;
