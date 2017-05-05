import AppDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter }  from 'events';
//import assign from 'object-assign';
import action from '../actions/appActions';

const CHANGE_EVENT = 'change';
let sources = [];

function setSources(data){
	sources = data;
}

class SourceStoreClass extends EventEmitter{

	emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getSources() {
    return sources;
  }
}

const SourceStore = new SourceStoreClass();

AppDispatcher.register(action => {
	switch(action.actionType){
		case "GET_ALL_NEWS_SOURCES":
      setSources(action.sources);
      SourceStore.emitChange();
      break
    default:
	}
});

export default SourceStore;
