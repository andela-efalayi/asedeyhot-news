import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlesStore from '../stores/ArticlesStore';
import getFeaturedCategoryArticle from '../actions/GetFeaturedCategoryArticle';
import getCategoryArticles from '../actions/GetTopCategoryArticles';
import FeaturedCategoryArticle
  from '../components/Articles/FeaturedCategoryArticle.jsx';
import TopCategoryArticles
  from '../components/Articles/TopCategoryArticles.jsx';

class CategoryArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredSource: this.props.sources.featuredSource,
      topSources: this.props.sources.topSources,
      featuredCategoryArticle: ArticlesStore.loadFeaturedCategoryArticle(),
      topArticles: ArticlesStore.loadTopArticles()
    };
    this.onArticlesChange = this.onArticlesChange.bind(this);
    this.renderFeaturedSource = this.renderFeaturedSource.bind(this);
    this.renderTopArticles = this.renderTopArticles.bind(this);
  }

  componentDidMount() {
    const { featuredSource, topSources } = this.state;
    if (featuredSource && topSources) {
      getCategoryArticles(topSources);
      getFeaturedCategoryArticle(featuredSource);
    }
    ArticlesStore.addChangeListener(this.onArticlesChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sources !== this.props.sources) {
      const { featuredSource, topSources } = nextProps.sources;
      getCategoryArticles(topSources);
      getFeaturedCategoryArticle(featuredSource);
      this.setState({
        featuredSource,
        topSources,
        topArticles: ArticlesStore.loadTopArticles()
      });
    }
  }

  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onArticlesChange);
  }

  onArticlesChange() {
    this.setState({
      featuredCategoryArticle: ArticlesStore.loadFeaturedCategoryArticle(),
      topArticles: ArticlesStore.loadTopArticles()
    });
  }

  renderFeaturedSource(featuredCategoryArticle) {
    if (featuredCategoryArticle.info) {
      return (
        <FeaturedCategoryArticle
          featuredArticle={featuredCategoryArticle.info}
          sourceName={featuredCategoryArticle.source}
        />
      );
    }
    return null;
  }

  renderTopArticles(topArticles) {
    if (topArticles.length) {
      return (
        <TopCategoryArticles
          topArticles={topArticles}
        />
      );
    }
    return null;
  }

  render() {
    const { featuredCategoryArticle, topArticles } = this.state;
    return (
      <div className="flex-container category-articles">
        <div className="col col-span-4 featured-category-article">
          {this.renderFeaturedSource(featuredCategoryArticle)}
        </div>
        <div className="col col-span-8">
          {this.renderTopArticles(topArticles)}
        </div>
      </div>
    );
  }
}

CategoryArticles.propsTypes = {
  sources: PropTypes.object
};

export default CategoryArticles;
