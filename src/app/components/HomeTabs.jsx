/**
 * @function HomeTabs
 * @return {object} react-componet
 */

import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Public from 'material-ui/svg-icons/social/public';

const changeTab = (tab) => {
  window.location = tab.props['data-route'];
};

const HomeTabs = () => {
  return (
    <Tabs className="home-tabs">
      <Tab icon={<Public />} data-route="#/sources"
      label="sources" onActive={changeTab}/>
      <Tab icon={<FavoriteBorder />} data-route="#/favourites"
      label="Favorites" onActive={changeTab}/>
    </Tabs>
  );
};

export default HomeTabs;
