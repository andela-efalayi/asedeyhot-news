import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import ArticlesStore from '../../../app/stores/ArticlesStore';
import AppActionTypes from '../../../app/constants/AppActionTypes';

jest.mock('../../../app/dispatcher/AppDispatcher');
jest.dontMock('../../../app/stores/ArticlesStore');
const callback = AppDispatcher.register.mock.calls[0][0];

describe('ArticlesStore', () => {
  const payload = {
    actionType: AppActionTypes.GET_ARTICLES,
    articles: [{
      title: 'some title',
      description: 'some description',
      url: 'some url',
      sortBy: 'top'
    },
    {
      title: 'some other title',
      description: 'some other description',
      url: 'some other url',
      sortBy: 'latest'
    }]
  };

  const listenerCb = () => {
    return 'listenerCb';
  };
  it('initial articles array should be empty', () => {
    expect(ArticlesStore.articles.length).toEqual(0);
  });
  it('registers payload', () => {
    callback(payload);
    expect(ArticlesStore.loadArticles().length)
    .toEqual(payload.articles.length);
  });
  it('addChangeListener works', () => {
    ArticlesStore.addChangeListener(listenerCb);
    const events = ArticlesStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('removeChangeListener works', () => {
    ArticlesStore.removeChangeListener(listenerCb);
    const events = ArticlesStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});
