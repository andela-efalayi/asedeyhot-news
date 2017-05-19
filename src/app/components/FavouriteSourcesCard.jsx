import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

const FavouriteSourcesCard = ({ favouriteSources }) => {
  if (Object.keys(favouriteSources).length === 0) {
    return (
      <div>
        <h4>You have no saved sources.</h4>
      </div>
    );
  }
  return (
    <div>
      <Card className="col-xs-12">
        <CardText>
          {Object.entries(favouriteSources)
          .map(([key, value]) => (
            <p key={key}>{key}: <a href={value}>{value}</a></p>
          ))}
        </CardText>
      </Card>
    </div>
  );
};

FavouriteSourcesCard.propTypes = {
  favouriteSources: PropTypes.object
};

FavouriteSourcesCard.defaultProps = {
  favouriteSources: null
};

export default FavouriteSourcesCard;
