import React, { Component } from 'react';
import Article from '../components/Article';
import AppActions from '../actions/appActions';
import SourceStore from '../stores/sourceStore';
import SubHeader from '../components/SubHeader';

const styles = {
  container: {
    width: 500,
    margin: 'auto'
  }
};

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      sortBys: ''
    };
    this.onChange = this.onChange.bind(this);
    this.goToHome = this.goToHome.bind(this);

  }
  componentWillMount() {
    if (localStorage.sourceId) {
      AppActions.getHeadlines(localStorage.sourceId, localStorage.sourceSortBys);
    }
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
      sortBys: SourceStore.getSourceSortBys()
    });
  }

  goToHome() {
     localStorage.removeItem('sourceId');
     localStorage.removeItem('sourceName');
     localStorage.removeItem('sourceSortBys');
     window.location.reload();
   }

  render() {
    let sourceSorts = this.state.sortBys.split(',');
    console.log(sourceSorts);
    return (
      <div>
       <SubHeader 
        title={localStorage.sourceName}
        sorts={sourceSorts}
        goToHome={this.goToHome}
       />
        <div style={styles.container}>
          {this.state.headlines.map(article => (
            <Article
              key={article.url}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Headlines;
