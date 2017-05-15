import { EventEmitter } from 'events';
import assign from 'object-assign';
import Dispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';
let sources = [];
let headlines = [];
let sortResult = [];
let archives = {};
let favouriteSources = {};

const setArchives = (payload) => {
  archives = payload;
};

const setFavouriteSources = (payload) => {
  favouriteSources = payload;
};

const setSources = (payload) => {
  sources = payload;
};

const setHeadlines = (payload) => {
  headlines = payload;
};

const setSortResult = (payload) => {
  sortResult = payload;
};

const AppStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getSources() {
    return sources;
  },
  getHeadlines() {
    return headlines;
  },
  getSortResult() {
    return sortResult;
  },
  getArchives() {
    return archives;
  },

  getFavouriteSources() {
    return favouriteSources;
  }
});

Dispatcher.register((action) => {
  switch (action.actionType) {
  case 'LOAD_SOURCES':
    setSources(action.sources);
    AppStore.emitChange();
    break;
  case 'GET_HEADLINES':
    setHeadlines(action.articles);
    AppStore.emitChange();
    break;
  case 'GET_HEADLINES_BY_A_SORT':
    setSortResult(action.articles);
    AppStore.emitChange();
    break;
  case 'GET_USER_FAVOURITES':
    setArchives(action.archives);
    setFavouriteSources(action.favouriteSources);
    AppStore.emitChange();
    break;
  default:
  }
});

export default AppStore;
