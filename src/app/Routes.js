import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import NewsSources from './components/NewsSources.jsx';
import Articles from './components/Articles.jsx';
import Favourites from './components/Favourites.jsx';
import CategoryNews from './containers/CategoryNews.jsx';

/**
 * Defines routes for the app
 * @function Routes
 */

const Routes = () => (
  <main>
    <Switch>
      <Route exact
      path="/" component={localStorage.getItem('user') ? NewsSources : Home} />
      <Route exact path="/sources" component={NewsSources} />
      <Route path="/sources/:id" component={Articles} />
      <Route path="/favourites" component={Favourites} />
      <Route path="/category/:name" component={CategoryNews} />
    </Switch>
  </main>
);

export default Routes;
