import React from 'react';
import CategoryArticleInfo from '../../components/CategoryArticleInfo.jsx';

const TopCategoryArticles = ({ topArticles }) => {
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
};

export default TopCategoryArticles;
