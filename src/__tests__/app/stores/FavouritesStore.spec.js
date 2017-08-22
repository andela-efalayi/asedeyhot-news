import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import FavouritesStore from '../../../app/stores/FavouritesStore';
import AppActionTypes from '../../../app/constants/AppActionTypes';

jest.mock('../../../app/dispatcher/AppDispatcher');
jest.dontMock('../../../app/stores/FavouritesStore');
const callback = AppDispatcher.register.mock.calls[0][0];

const payload = {
  actionType: AppActionTypes.GET_ALL_FAVOURITES,
  favouriteArticles: {
    title: 'General Election 2017',
    author: 'BBC News',
    description: 'The party says it would prioritise jobs and',
    url: 'http://www.bbc.co.uk/news/uk-politics-39698465'
  },
  favouriteSources: {
    'Ars Technica': 'http://arstechnica.com',
  }
};

const listenerCb = () => (
  'listenerCb'
);

describe('FavouriteStore', () => {
  it('should have a addChangeListener method', () => {
    expect(FavouritesStore.addChangeListener).toBeDefined();
  });
  it('should have a removeChangeListener method', () => {
    expect(FavouritesStore.removeChangeListener).toBeDefined();
  });
  it('initial favourite articles object should be empty', () => {
    expect(Object.keys(FavouritesStore.articles).length).toEqual(0);
  });
  it('initial favourite sources object should be empty', () => {
    expect(Object.keys(FavouritesStore.sources).length).toEqual(0);
  });
  it('should should update store favourite articles and sources', () => {
    callback(payload);
    expect(FavouritesStore.loadFavouriteArticles())
      .toEqual(payload.favouriteArticles);
    expect(FavouritesStore.loadFavouriteSources())
      .toEqual(payload.favouriteSources);
  });
  it('addChangeListener works', () => {
    FavouritesStore.addChangeListener(listenerCb);
    const events = FavouritesStore._events;
    expect(Object.keys(events).length).toEqual(1);
  });
  it('removeChangeListener works', () => {
    FavouritesStore.removeChangeListener(listenerCb);
    const events = FavouritesStore._events;
    expect(Object.keys(events).length).toEqual(0);
  });
});
