import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

/**
 * Displays all favourite news sources on Favorites page
 * @function FavouriteSoures
 * @param {object} sources
 * @return {object} react-component
 */

const FavouriteSources = ({ sources }) => {
  // Checks if favourite sources gotten from database is undefined
  if (sources === undefined) {
    return (
      <div>
        <p>You have no saved sources.</p>
      </div>
    );
  }
  return (
    <div>
      <Card className="col-xs-12">
        <CardText>
          <ul>
            {Object.entries(sources)
          .map(([key, value]) => (
            <li key={key}>{key}: <a href={value}>{value}</a></li>
          ))}
          </ul>
        </CardText>
      </Card>
    </div>
  );
};

FavouriteSources.propTypes = {
  sources: PropTypes.object
};

export default FavouriteSources;
