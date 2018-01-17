import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import { getCategoryImage } from '../helpers/categoryNews';
import CategoryArticles from './CategoryArticles.jsx';

class CategoryNews extends Component {
  constructor(props) {
    super(props);
    const categoryName = props.match.params.name;
    this.state = {
      categoryName,
      categoryNewsSources: NewsSourcesStore
        .loadCategoryNewsSources(categoryName)
    };
    this.onSourcesChange = this.onSourcesChange.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.onSourcesChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { name } = nextProps.match.params;
      this.setState({
        categoryName: name,
        categoryNewsSources: NewsSourcesStore.loadCategoryNewsSources(name)
      });
    }
  }

  componentWillUnmount() {
    NewsSourcesStore.removeChangeListener(this.onSourcesChange);
  }

  onSourcesChange() {
    this.setState({
      categoryNewsSources: NewsSourcesStore
        .loadCategoryNewsSources(this.state.categoryName)
    });
  }

  renderArticles() {
    return (
      <CategoryArticles sources={this.state.categoryNewsSources} />
    );
  }

  render() {
    const imageUrl = getCategoryImage(this.state.categoryName);
    const { categoryNewsSources } = this.state;
    return (
      <div className="category-news">
        <div className="banner">
          <img src={imageUrl} alt="sports" />
          <div className="image-overlay">
            <h1 className="category-name">{this.state.categoryName}</h1>
          </div>
        </div>
        {this.renderArticles(categoryNewsSources)}
      </div>
    );
  }
}

CategoryNews.propsTypes = {
  match: PropTypes.object
};

export default CategoryNews;
