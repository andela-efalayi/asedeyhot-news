import React from 'react';
import PropTypes from 'prop-types';
import CategoryArticleInfo from '../../components/CategoryArticleInfo.jsx';

const FeaturedCategoryArticle = ({ featuredArticle, sourceName }) => {
  return (
    <div>
      <img
        className="responsive"
        src={featuredArticle.urlToImage}
        alt=""
      />
      <CategoryArticleInfo
        articleUrl={featuredArticle.url}
        author={featuredArticle.author}
        imageUrl={featuredArticle.urlToImage}
        source={sourceName}
        title={featuredArticle.title}
      />
    </div>
  );
};

FeaturedCategoryArticle.propTypes = {
  featuredSource: PropTypes.object
};

export default FeaturedCategoryArticle;
