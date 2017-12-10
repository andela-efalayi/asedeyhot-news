import React, { Component } from 'react';
import GetCategoryArticles from '../actions/GetCategoryArticles';
import ArticlesStore from '../stores/ArticlesStore';
import CategoryArticleInfo from '../components/CategoryArticleInfo.jsx';

class TopCategoryArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArticles: ArticlesStore.loadTopArticles(),
      topSources: props.topSources
    };
    this.onArticlesChange = this.onArticlesChange.bind(this);
  }

  componentDidMount() {
    GetCategoryArticles(this.state.topSources);
    ArticlesStore.addChangeListener(this.onArticlesChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { topSources } = nextProps;
      GetCategoryArticles(topSources);
    }
  }

  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onArticlesChange);
  }

  onArticlesChange() {
    this.setState({
      topArticles: ArticlesStore.loadTopArticles()
    });
  }

  renderArticlesInfo() {
    const { topArticles } = this.state;
    return (
      <div className="flex-container top-category-articles">
        {
          topArticles.map((article, index) => {
            const { content, source } = article;
            return (
              <CategoryArticleInfo
                key={`${content.url + index}`}
                articleUrl={content.url}
                author={content.author}
                style={'col'}
                imageUrl={content.urlToImage}
                source={source}
                title={content.title}
              />
            );
          })
        }
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderArticlesInfo()}
      </div>
    );
  }
}

export default TopCategoryArticles;
