import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Explore from 'material-ui/svg-icons/action/explore';

import DatabaseActions from '../actions/DatabaseActions';

const cardAction = {
  float: 'right',
};

const loadHeadlines = (event, value) => {
  if (Array.isArray(value)) {
    DatabaseActions.addToFavouriteSources(value);
  } else {
    localStorage.setItem('source', JSON.stringify(value));
  }
};

class SourceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const source = this.props.source;
    return (
      <Card className="col-xs-6 col-sm-6 col-md-3 card">
        <div className="title">
          <h3><a href={source.url}>{source.name}</a></h3>
          <h6>{source.category.toUpperCase()}</h6>
        </div>
        <CardText className="description">
          <span>{source.description}</span>
        </CardText>
        <CardActions style={cardAction}>
           <FlatButton
            onTouchTap={this.handleTouchTap}
            label="options" primary
           />
           <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu onChange={loadHeadlines}>
              <MenuItem primaryText="View headlines"
              rightIcon={<Explore />} value={source}
              containerElement={
                <Link to={`/sources/${source.id}`}/>}/>
              <MenuItem primaryText="Add to favourite sources"
              rightIcon={<FavoriteBorder />}
              value={[source.name, source.url]} />
            </Menu>
        </Popover>
        </CardActions>
      </Card>
    );
  }
}

SourceCard.propTypes = {
  source: PropTypes.object
};

SourceCard.defaultProps = {
  source: null
};

export default SourceCard;
