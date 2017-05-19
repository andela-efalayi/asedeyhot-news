import { EventEmitter } from 'events';
import assign from 'object-assign';
import Dispatcher from '../dispatcher/appDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const CHANGE_EVENT = 'change';

let archive = {};
let favouriteSources = {};

const setArchive = (payload) => {
  archive = payload;
};

const setFavouriteSources = (payload) => {
  favouriteSources = payload;
};

const FavouriteStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getArchive() {
    return archive;
  },

  getFavouriteSources() {
    return favouriteSources;
  }
});

Dispatcher.register((action) => {
  switch (action.actionType) {
  case AppActionTypes.GET_USER_FAVOURITES:
    setArchive(action.archives);
    setFavouriteSources(action.favouriteSources);
    FavouriteStore.emitChange();
    break;
  default:
  }
});

export default FavouriteStore;
