import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardText } from 'material-ui/Card';

/**
 * Displays all favourite articles on Favorites page
 * @function ArchiveChard
 * @param {object} articles
 * @return {object} react-component
 */

const FavouriteArticles = ({ articles }) => {
  if (articles === null) {
    return (
      <div>
        <h4>You have no saved articles.</h4>
      </div>
    );
  }
  return (
    <div className="row">
      {Object.entries(articles).map(([key, value]) => (
        <div className="col-xs-6 col-sm-6 col-md-3" key={key}>
          <Card className="card">
            <CardMedia>
              <img src={value.urlToImage} alt=""/>
            </CardMedia>
            <CardText>
              <h6>{value.title}
                <span>...<a href={value.url}>more</a></span>
              </h6>
              <p>Author: {value.author}</p>
            </CardText>
          </Card>
      </div>
    ))}
  </div>
  );
};

FavouriteArticles.propTypes = {
  articles: PropTypes.object
};

export default FavouriteArticles;
