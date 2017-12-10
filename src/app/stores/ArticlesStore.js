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
    this.topArticles = [];
    this.featuredCategoryArticle = {};
  }

  /**
   * @memberof ArticlesStore
   * @return {void}
   */
  loadArticles() {
    return this.articles;
  }

  loadFeaturedCategoryArticle() {
    return this.featuredCategoryArticle;
  }

  loadTopArticles() {
    return this.topArticles;
  }

  /**
   * @memberof ArticlesStore
   * @param {func} callback
   * @return {void}
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @memberof ArticlesStore
   * @param {func} callback
   * @return {void}
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * @memberof ArticlesStore
   * @return {void}
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const articlesStore = new ArticlesStore();

// Register AppDispatcher with payload
AppDispatcher.register((payload) => {
  switch (payload.actionType) {
  case AppActionTypes.GET_ARTICLES:
    articlesStore.articles = payload.articles;
    articlesStore.emitChange();
    break;
  case AppActionTypes.GET_FEATURED_CATEGORY_ARTICLE:
    articlesStore.featuredCategoryArticle = payload.featuredCategoryArticle;
    articlesStore.emitChange();
    break;
  case AppActionTypes.GET_TOP_CATEGORY_ARTICLES:
    articlesStore.topArticles = payload.topArticles;
    articlesStore.emitChange();
    break;
  default:
  }
});

export default articlesStore;
