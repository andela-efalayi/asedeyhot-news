import Dispatcher from '../../../app/dispatcher/appDispatcher';
import AppStore from '../../../app/stores/AppStore';

jest.mock('../../../app/dispatcher/appDispatcher');
const callback = Dispatcher.register.mock.calls[0][0];
console.log(callback);

const sortAction = {
  actionType: 'GET_HEADLINES_BY_A_SORT',
  articles: [{
    title: 'some title',
    description: 'some description',
    url: 'some url',
    sortBy: 'top'
  },
  {
    title: 'some title1',
    description: 'some description1',
    url: 'some url1',
    sortBy: 'latest'
  }]
};

const headlineAction = {
  actionType: 'GET_HEADLINES',
  articles: [{
    title: 'some title',
    description: 'some description',
    url: 'some url'
  }]
};

const sourceAction = {
  actionType: 'LOAD_SOURCES',
  sources: [{
    name: 'name of news source',
    id: 'id of news source',
    url: 'url of news source',
    description: 'description of news source'
  }]
};

describe('AppStore', () => {
  it('should have a addChangeListener method', () => {
    expect(AppStore.addChangeListener).toBeDefined();
  });
  it('should have a removeChangeListener method', () => {
    expect(AppStore.removeChangeListener).toBeDefined();
  });
  it('should update sources when the action is triggered', () => {
    callback(sourceAction);
    expect(AppStore.getSources()).toEqual(sourceAction.sources);
  });
  it('should update headlines when the action is triggered', () => {
    callback(headlineAction);
    expect(AppStore.getHeadlines()).toEqual(headlineAction.articles);
  });
  it('should sort headlines when the action is triggered', () => {
    callback(sortAction);
    expect(AppStore.getSortResult()).toEqual(sortAction.articles);
  });
});
