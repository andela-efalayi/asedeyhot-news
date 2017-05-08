import React, { Component } from 'react';
import Article from '../components/Article';

const styles = {
  container: {
    width: 500,
    margin: 'auto'
  }
};

class Headlines extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.headlines.articles.map((article) => (
          <Article
            key={article.url}
            title={article.title}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    );
  }
}

export default Headlines;
