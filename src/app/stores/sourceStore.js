import AppDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';
let sources = [];
let headlines = [];
let sourceSortBys = '';
function setSources(payload) {
  sources = payload;
}
function setHeadlines(payload) {
  headlines = payload;
}
function setSourceSortBys(payload){
  sourceSortBys = payload;
}

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
  getSourceSortBys() {
    return sourceSortBys;
  }

});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'INITIALISE_APP':
      setSources(action.sources);
      AppStore.emitChange();
      break;
    case 'GET_HEADLINES':
      setHeadlines(action.articles);
      setSourceSortBys(action.sorts);
      AppStore.emitChange();
      break;
    default:
    }
});

export default AppStore;
