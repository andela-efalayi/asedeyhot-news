import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const CHANGE_EVENT = 'change';

/**
 * @class ArticlesStore
 * @extends {EventEmitter}
 * @method getArticles
 * @method addChangeListener
 * @method removeChangeListener
 * @method emitChange
 */

class ArticlesStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  loadArticles() {
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

const articlesStore = new ArticlesStore();

/**
 * Register dispatcher
 * @param {object} payload
 */
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case AppActionTypes.GET_ARTICLES:
    articlesStore.articles = payload.articles;
    articlesStore.emitChange();
    break;
  default:
  }
});

export default articlesStore;
