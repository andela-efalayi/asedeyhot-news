import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const CHANGE_EVENT = 'change';

/**
 * @class FavouritesStore
 * @extends {EventEmitter}
 * @method getFavouriteSources
 * @method getFavouriteArticles
 * @method addChangeListener
 * @method removeChangeListener
 * @method emitChange
 */

class FavouritesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = {};
    this.articles = {};
  }

  getFavouriteSources() {
    return this.sources;
  }

  getFavouriteArticles() {
    return this.articles;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const favouritesStore = new FavouritesStore();

/**
 * Register dispatcher
 * @param {object} payload
 */
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case AppActionTypes.GET_ALL_FAVOURITES:
    favouritesStore.articles = payload.favouriteArticles;
    favouritesStore.sources = payload.favouriteSources;
    favouritesStore.emitChange();
    break;
  default:
  }
});

export default favouritesStore;
