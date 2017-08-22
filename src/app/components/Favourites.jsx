import React, { Component } from 'react';
import AppFavourites from '../actions/AppFavourites';
import FavouritesStore from '../stores/FavouritesStore';
import FavouriteArticles from './FavouriteArticles.jsx';
import FavouriteSources from './FavouriteSources.jsx';

/**
 * @class Favourites
 * @extends {Component}
 */

class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      favouriteArticles: {},
      favouriteSources: {}
    };
    this.onFavouritesChange = this.onFavouritesChange.bind(this);
  }

  /**
   * Calls the getAll function from AppFavourites when the component is mounted
   * @memberof Favourites
   * @method componentDidMount
   * @return {void}
   */
  componentDidMount() {
    AppFavourites.getAll();
    FavouritesStore.addChangeListener(this.onFavouritesChange);
  }

  /**
   * Removes the listener when the component is unmounted
   * @memberof Favourites
   * @method componentWillUnmount
   * @return {void}
   */
  componentWillUnmount() {
    FavouritesStore.removeChangeListener(this.onFavouritesChange);
  }

  /**
   * Sets state when FavouritesStore is updated
   * @memberof Favourites
   * @method onFavouritesChange
   * @return {void}
   */
  onFavouritesChange() {
    this.setState({
      favouriteArticles: FavouritesStore.loadFavouriteArticles(),
      favouriteSources: FavouritesStore.loadFavouriteSources()
    });
  }
  render() {
    const favouriteSources = this.state.favouriteSources;
    const favouriteArticles = this.state.favouriteArticles;
    return (
      <div className="body favourites">
        <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8">
          <h3>Favourite Articles</h3>
          <div className="list">
            <FavouriteArticles articles={favouriteArticles}/>
          </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h3>Favourite Sources</h3>
            <div className="list">
              <FavouriteSources sources={favouriteSources}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Favourites;
