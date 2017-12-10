import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsSourcesStore from '../stores/NewsSourcesStore';
import FeaturedCategoryArticle from './FeaturedCategoryArticle.jsx';
import TopCategoryArticles from './TopCategoryArticles.jsx';
import { getCategoryImage } from '../helpers/categoryNews';

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
    this.renderFeaturedSource = this.renderFeaturedSource.bind(this);
    this.renderTopArticles = this.renderTopArticles.bind(this);
  }

  componentDidMount() {
    NewsSourcesStore.addChangeListener(this.onSourcesChange);
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps.match.params;
    if (nextProps !== this.props) {
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

  renderFeaturedSource(categoryNewsSources) {
    if (categoryNewsSources.featuredSource) {
      return (
        <FeaturedCategoryArticle
          featuredSource={categoryNewsSources.featuredSource}
        />
      );
    }
    return null;
  }

  renderTopArticles(categoryNewsSources) {
    if (categoryNewsSources.topSources.length) {
      return (
        <TopCategoryArticles
          topSources={categoryNewsSources.topSources}
        />
      );
    }
    return null;
  }

  render() {
    const imageUrl = getCategoryImage(this.state.categoryName);
    const { categoryNewsSources } = this.state;
    return (
      <div className="category-news">
        <div className="banner">
          <img src={imageUrl} alt="sports"/>
          <div className="image-overlay">
            <h1 className="category-name">{this.state.categoryName}</h1>
        </div>
        </div>
        <div className="flex-container category-articles">
          <div className="col col-span-4 featured-category-article">
            {this.renderFeaturedSource(categoryNewsSources)}
          </div>
          <div className="col col-span-8">
            {this.renderTopArticles(categoryNewsSources)}
          </div>
        </div>
      </div>
    );
  }
}

CategoryNews.propsTypes = {
  match: PropTypes.object
};

export default CategoryNews;
