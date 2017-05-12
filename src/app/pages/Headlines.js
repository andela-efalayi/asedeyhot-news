import React, { Component } from 'react';
import Article from '../components/Article';
import AppActions from '../actions/appActions';
import SourceStore from '../stores/sourceStore';
import SubHeader from '../components/SubHeader';

if (localStorage.sourceId) {
  AppActions.getHeadlines(localStorage.sourceId, localStorage.sortBys);
}

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      sortBys: '',
      sortResult: [],
      sortHeadlines: false
    };
    this.onChange = this.onChange.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  componentDidMount() {
    SourceStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      headlines: SourceStore.getHeadlines(),
      sortBys: SourceStore.getSourceSortBys(),
      sortResult: SourceStore.getSortResult()
    });
  }
  showSortedResult = (event, index, value) => {
    AppActions.getParticularSort(localStorage.sourceId, value);
    this.setState({
      sortHeadlines: true,
      sortResult: SourceStore.getSortResult()
    });
  }

  goToHome() {
    localStorage.removeItem('sourceId');
    localStorage.removeItem('sourceName');
    localStorage.removeItem('sourceSortBys');
    this.setState({
      sortHeadlines: false
    });
    window.location.reload();
  }

  render() {
    const sourceSorts = this.state.sortBys.split(',');
    let sourceHeadlines = null;
    if (this.state.sortHeadlines === true) {
      sourceHeadlines = this.state.sortResult;
    } else {
      sourceHeadlines = this.state.headlines;
    }
    return (
      <div >
       <SubHeader
        title={localStorage.sourceName}
        sorts={sourceSorts}
        goToHome={this.goToHome}
        showSortedResult={this.showSortedResult}
       />
        <div classID="headlines">
          {sourceHeadlines.map(article => (
            <Article
              key={article.url}
              title={article.title}
              description={article.description}
              url={article.url}
              image={article.urlToImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Headlines;
