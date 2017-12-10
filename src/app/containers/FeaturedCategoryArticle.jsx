import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetFeaturedCategoryArticle from '../actions/GetFeaturedCategoryArticle';
import ArticlesStore from '../stores/ArticlesStore';
import CategoryArticleInfo from '../components/CategoryArticleInfo.jsx';

class FeaturedCategoryArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredSource: props.featuredSource,
      featuredCategoryArticle: {}
    };
    this.onArticlesChange = this.onArticlesChange.bind(this);
  }

  componentDidMount() {
    const { featuredSource } = this.state;
    GetFeaturedCategoryArticle(featuredSource.id,
      featuredSource.sortBysAvailable[0]);
    ArticlesStore.addChangeListener(this.onArticlesChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      const { featuredSource } = nextProps;
      GetFeaturedCategoryArticle(featuredSource.id,
        featuredSource.sortBysAvailable[0]);
    }
  }

  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onArticlesChange);
  }

  onArticlesChange() {
    this.setState({
      featuredCategoryArticle: ArticlesStore.loadFeaturedCategoryArticle()
    });
  }

  render() {
    const { featuredCategoryArticle, featuredSource } = this.state;
    return (
     <div>
        <img
          className="responsive"
          src={featuredCategoryArticle.urlToImage}
          alt=""
        />
        <CategoryArticleInfo
          articleUrl={featuredCategoryArticle.url}
          author={featuredCategoryArticle.author}
          imageUrl={featuredCategoryArticle.urlToImage}
          source={featuredSource.name}
          title={featuredCategoryArticle.title}
        />
     </div>
    );
  }
}

FeaturedCategoryArticle.propTypes = {
  featuredSource: PropTypes.object
};

export default FeaturedCategoryArticle;
