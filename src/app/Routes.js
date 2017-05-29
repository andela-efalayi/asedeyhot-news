import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import NewsSources from './components/NewsSources.jsx';
import Articles from './components/Articles.jsx';
import Favourites from './components/Favourites.jsx';

/**
 * Defines routes for the app
 * @function Routes
 */

const Routes = () => (
  <main>
    <Switch>
      <Route exact
      path="/" component={localStorage.getItem('user') ? NewsSources : Login} />
      <Route exact path="/sources" component={NewsSources} />
      <Route path="/sources/:id" component={Articles} />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  </main>
);

export default Routes;
