import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const CHANGE_EVENT = 'change';

/**
 * @class NewsSourcesStore
 * @extends {EventEmitter}
 * @method getNewsSources
 * @method addChangeListener
 * @method removeChangeListener
 * @method emitChange
 */

class NewsSourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  loadAllSources() {
    return this.sources;
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

const newsSourcesStore = new NewsSourcesStore();

/**
 * Register dispatcher
 * @param {object} payload
 */
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case AppActionTypes.GET_NEWS_SOURCES:
    newsSourcesStore.sources = payload.sources;
    newsSourcesStore.emitChange();
    break;
  default:
  }
});

export default newsSourcesStore;
