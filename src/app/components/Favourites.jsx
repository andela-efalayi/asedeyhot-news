import React, { Component } from 'react';
import DatabaseActions from '../actions/DatabaseActions';
import FavouriteStore from '../store/FavouriteStore';
import ArchiveCard from './ArchiveCard.jsx';
import FavouriteSourcesCard from './FavouriteSourcesCard.jsx';


class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      archives: {},
      favouriteSources: {},
      user: JSON.parse(localStorage.getItem('user'))
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    const googleId = this.state.user.googleId;
    DatabaseActions.getUserFavourites(googleId);
    FavouriteStore.addChangeListener(this.onChange);
  }

  componentWillUnmount = () => {
    FavouriteStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      archives: FavouriteStore.getArchive(),
      favouriteSources: FavouriteStore.getFavouriteSources()
    });
  }
  render() {
    return (
      <div className="container-fluid">
         <div className="row">
          <div className="col-sm-6 col-md-8">
            <h3>Archives</h3>
            <ArchiveCard headlines={this.state.archives}/>
          </div>
          <div className="col-sm-6 col-md-4">
            <h3>Favourite Sources</h3>
            <FavouriteSourcesCard
            favouriteSources={this.state.favouriteSources}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
