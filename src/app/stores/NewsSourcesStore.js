import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';
import { categoryFilter,
  setCategoryNewsSources } from '../helpers/categoryNews';

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

  /**
   * @memberof NewsSourcesStore
   * @return {void}
   */
  loadAllSources() {
    return this.sources;
  }

  loadCategoryNewsSources(categoryName) {
    return setCategoryNewsSources(categoryFilter(this.sources, categoryName));
  }


  /**
   * @memberof NewsSourcesStore
   * @param {func} callback
   * @return {void}
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @memberof NewsSourcesStore
   * @param {func} callback
   * @return {void}
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * @memberof NewsSourcesStore
   * @return {void}
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const newsSourcesStore = new NewsSourcesStore();

// Registers AppDispatcher with payload
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
