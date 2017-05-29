import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader,
  CardMedia, CardText } from 'material-ui/Card';
import swal from 'sweetalert2';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';
import AppFavourites from '../actions/AppFavourites';

/**
 * @class ArticleCard
 * @extends {Component}
 * @method saveToFavouriteArticles
 * @param {object} props
 */

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.article,
      favIcon: <FavoriteBorder />,
      tooltip: 'Add to favourite articles'
    };
    this.saveToFavouriteArticles = this.saveToFavouriteArticles.bind(this);
  }

  /**
   * Save a user's favourite article to the database
   * @memberof ArticleCard
   */

  saveToFavouriteArticles() {
    const article = this.props.article;
    AppFavourites.saveToFavouriteArticles(article)
    .then((status) => {
    /**
     * Update view if successful
     */
      this.setState({
        favIcon: <Favorite />,
        tooltip: status
      });
    })
    .catch((error) => {
    /**
     * Show an alert if unsuccessful
     */
      swal(
        'Sorry',
         error,
        'error'
      );
    });
  }

  /**
   * @param {string} word
   * @param {number} limit
   * @param {string} endChar
   * @return {string} newText
   * @memberof ArticleCard
   */

  setChar(word, limit, endChar) {
    const newText = word;
    if (newText === null) {
      return 'No text available';
    }
    return `${newText.substring(0, limit) + endChar}`;
  }
  render() {
    return (
      <Card className="card with-image">
      <CardHeader className="article-title"
      title={this.setChar(this.props.article.title, 36, '...')} />
      <CardMedia>
        <img src={this.props.article.urlToImage} />
      </CardMedia>
      <CardText className="card-description">
        {this.setChar(this.props.article.description,
         120,
         '...'
         )}
         <span className="read-more">
           <a href={this.props.article.url}> read more </a>
          </span>
      </CardText>
      <CardActions className="card-actions">
        <IconButton tooltip={this.state.tooltip} touch
        onClick={this.saveToFavouriteArticles} tooltipPosition="bottom-left">
        {this.state.favIcon}
        </IconButton>>
      </CardActions>
    </Card>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;
