import { EventEmitter } from 'events';
import assign from 'object-assign';
import Dispatcher from '../dispatcher/appDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const CHANGE_EVENT = 'change';
let sources = [];
let topHeadlines = [];
let sortResult = [];

const setSources = (payload) => {
  sources = payload;
};

const setTopHeadlines = (payload) => {
  topHeadlines = payload;
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
  getTopHeadlines() {
    return topHeadlines;
  },
  getSortResult() {
    return sortResult;
  }
});

Dispatcher.register((action) => {
  switch (action.actionType) {
  case AppActionTypes.LOAD_SOURCES:
    setSources(action.sources);
    AppStore.emitChange();
    break;
  case AppActionTypes.GET_HEADLINES:
    setTopHeadlines(action.articles);
    AppStore.emitChange();
    break;
  case AppActionTypes.GET_HEADLINES_BY_A_SORT:
    setSortResult(action.articles);
    AppStore.emitChange();
    break;
  default:
  }
});

export default AppStore;
