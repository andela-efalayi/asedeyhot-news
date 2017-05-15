import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Explore from 'material-ui/svg-icons/action/explore';
import Public from 'material-ui/svg-icons/social/public';
import DatabaseActions from '../actions/DatabaseActions';

const loadHeadlines = (event, value) => {
  if (Array.isArray(value)) {
    DatabaseActions.addToFavouriteSources(value);
  } else {
    localStorage.setItem('source', JSON.stringify(value));
  }
};

const SourceCard = ({ source }) => {
  return (
  <Card className="col-xs-6 col-sm-6 col-md-3 card">
    <CardTitle title={source.name} subtitle={source.category.toUpperCase()} />
    <CardText className="description">
      <span>{source.description}</span>
    </CardText>
    <CardActions>
      <IconMenu onChange={loadHeadlines}
      iconButtonElement={<IconButton tooltip="options" touch
      tooltipPosition="top-center"><Public /></IconButton>}>
      <MenuItem primaryText="View Headlines"
      rightIcon={<Explore />} value={source}
      containerElement={<Link to={`/sources/${source.id}`}/>}
      />
      <MenuItem primaryText="Add To Favourite Sources"
      rightIcon={<FavoriteBorder />}
      value={[source.name, source.url]} />
      </IconMenu>
    </CardActions>
  </Card>
  );
};

SourceCard.propTypes = {
  source: PropTypes.object
};

SourceCard.defaultProps = {
  source: null
};

export default SourceCard;
