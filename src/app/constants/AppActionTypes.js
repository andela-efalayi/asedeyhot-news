import keyMirror from 'keymirror';

/**
 * All app action-types
 */

const AppActionTypes = keyMirror({
  GET_ALL_FAVOURITES: null,
  GET_ARTICLES: null,
  GET_FEATURED_CATEGORY_ARTICLE: null,
  GET_NEWS_SOURCES: null,
  GET_TOP_CATEGORY_ARTICLES: null
});

export default AppActionTypes;
