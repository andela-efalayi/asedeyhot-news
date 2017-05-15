import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import DatabaseActions from '../actions/DatabaseActions';
import AppStore from '../store/AppStore';
import Depth from './Depth.jsx';

class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      archives: [],
      favouriteSources: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    DatabaseActions.getUserFavourites();
    AppStore.addChangeListener(this.onChange);
  }

  componentWillUnmount = () => {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      archives: AppStore.getArchives(),
      favouriteSources: AppStore.getFavouriteSources()
    });
  }
  render() {
    return (
      <div className="container-fluid">
         <div className="row">
          <div className="col-sm-6 col-md-8">
            <h3>Archives</h3>
            <Depth />
            {Object.entries(this.state.archives).map(([key, value]) => (
              <Card key={key} className="col-md-6 archiveItem">
                <CardText>
                  <h5>{value.title}</h5>
                  <p>Author: {value.author}</p>
                  <p><a href={value.url}>Go to link</a></p>
                </CardText>
              </Card>
            ))}
          </div>
          <div className="clear-fix col-sm-6 col-md-4">
            <h3>Favourite Sources</h3>
            <Card className="col-xs-12">
              <CardText>
                {Object.entries(this.state.favouriteSources)
                .map(([key, value]) => (
                  <p key={key}>{key}: <a href={value}>{value}</a></p>
                ))}
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
