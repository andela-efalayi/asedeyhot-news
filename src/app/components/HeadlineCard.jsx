import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader,
  CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';

import DatabaseActions from '../actions/DatabaseActions';

class HeadlineCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.headline,
      favIcon: <FavoriteBorder />,
      tooltip: 'add to archive'
    };
    this.addToArchive = this.addToArchive.bind(this);
  }
  addToArchive = () => {
    DatabaseActions.addToArchive(this.state.value);
    this.setState({
      favIcon: <Favorite />,
      tooltip: 'added to archives'
    });
  };
  render() {
    return (
      <Card className="col-xs-6 col-sm-6 col-md-4 card withImage">
      <CardHeader title={this.props.headline.title} />
      <CardMedia >
        <img src={this.props.headline.urlToImage} />
      </CardMedia>
      <CardText className="cardDescription">
        <span>{this.props.headline.description}</span>
        <span className="readMore">
          <RaisedButton
          label="Read more"
          href={this.props.headline.url}
          target="_blank"
          secondary
        />
        </span>
      </CardText>
      <CardActions className="cardActions">
        <IconButton tooltip={this.state.tooltip} touch
        onClick={this.addToArchive} tooltipPosition="top-right">
        {this.state.favIcon}
        </IconButton>>
      </CardActions>
    </Card>
    );
  }
}

HeadlineCard.propTypes = {
  headline: PropTypes.object
};

HeadlineCard.defaultProps = {
  headline: null
};

export default HeadlineCard;
