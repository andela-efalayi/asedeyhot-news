import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Sources from './components/Sources.jsx';
import Headlines from './components/Headlines.jsx';
import Favourites from './components/Favourites.jsx';

// import InitialiseApp from './actions/initialise';
// InitialiseApp.init();


const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/sources" component={Sources}/>
      <Route path="/sources/:id" component={Headlines} />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  </main>
);

export default Routes;
