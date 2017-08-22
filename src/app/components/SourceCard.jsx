import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardText } from 'material-ui/Card';
import swal from 'sweetalert2';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import AppFavourites from '../actions/AppFavourites';

/**
 * @class SourceCard
 * @extends {Component}
 * @method saveToFavouriteSources
 * @method setCurrentSource
 * @param {object} props
 */

class SourceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIcon: <FavoriteBorder />,
      tooltip: 'Add to favourite sources'
    };
    this.setCurrentSource = this.setCurrentSource.bind(this);
    this.saveToFavouriteSources = this.saveToFavouriteSources.bind(this);
  }

  /**
   * Saves a new favourite source to the database
   * @memberof SourceCard
   * @method saveToFavouriteSources
   * @return {void}
   */

  saveToFavouriteSources() {
    const source = this.props.source;
    AppFavourites.saveToFavouriteSources(source)
    .then((status) => {
      // Update view if successful
      this.setState({
        favIcon: <Favorite />,
        tooltip: status
      });
    })
    .catch((error) => {
      // Update view if successful
      swal(
        'Sorry',
         error,
        'error'
      );
    });
  }

  /**
   * Save a currently selected source to localStorage
   * @memberof SourceCard
   * @method setCurrentSource
   * @return {void}
   */

  setCurrentSource(source) {
    const sourceDetails = {
      id: source.id,
      name: source.name,
      sortOptions: source.sortBysAvailable
    };
    localStorage.setItem('currentSource', JSON.stringify(sourceDetails));
  }

  render() {
    const source = this.props.source;
    const setCurrentSource = () => this.setCurrentSource(source);
    const setChar = (word, limit, endChar) => {
      const newWord = word;
      if (newWord.length > limit) {
        return `${newWord.substring(0, limit) + endChar}`;
      }
      return word;
    };
    return (
      <Card className="card">
        <div className="title">
          <h3 onClick={setCurrentSource}>
            <Link to={{
              pathname: `/sources/${source.id}`
            }}>
          {source.name} </Link></h3>
          <h6>{source.category.toUpperCase()}</h6>
        </div>
        <CardText className="card-description">
          {setChar(this.props.source.description,
            120,
            '...'
          )}
        </CardText>
        <CardActions className="source-actions">
          <IconButton tooltip={this.state.tooltip} touch
            onClick={this.saveToFavouriteSources}
            tooltipPosition="bottom-right">
            {this.state.favIcon}
          </IconButton>
          <IconButton tooltip="View headlines" touch
            onClick={setCurrentSource}
            containerElement={<Link to={`/sources/${source.id}`}/>}
            tooltipPosition="bottom-right">
            <ZoomIn/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

SourceCard.propTypes = {
  source: PropTypes.object
};

export default SourceCard;
