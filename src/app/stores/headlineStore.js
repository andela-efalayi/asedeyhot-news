import AppDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter }  from 'events';
import action from '../actions/appActions';

const CHANGE_EVENT = 'change';
let headlines = [];

function setHeadlines(data){
	headlines = data;
}

class HeadlineStoreClass extends EventEmitter{

	emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  getHeadlines() {
    return headlines;
  }

}

const HeadlineStore = new HeadlineStoreClass();

AppDispatcher.register(action => {
	switch(action.actionType){
		case "GET_ALL_HEADLINES":
      setHeadlines(action.headlines);
      HeadlineStore.emitChange();
      break
    default:
	}
});

export default HeadlineStore;