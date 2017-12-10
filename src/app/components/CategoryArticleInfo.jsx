import React from 'react';
import PropTypes from 'prop-types';

const CategoryArticleInfo = ({ articleUrl, author, style, source, title }) => {
  const className = style ? `${style} article-info` : 'article-info';
  return (
    <div className={className}>
      <h5><a href={articleUrl} target="_blank">{title}</a></h5>
      <div>
        <p className="author">
          <strong>Author: </strong>
          {author || 'Unknown'}
        </p>
        <p className="source">
          <strong>Source: </strong>{source || 'Unknown'}
        </p>
      </div>
    </div>
  );
};

CategoryArticleInfo.propTypes = {
  author: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string
};

export default CategoryArticleInfo;
