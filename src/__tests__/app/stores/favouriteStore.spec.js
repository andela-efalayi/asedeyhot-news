import Dispatcher from '../../../app/dispatcher/appDispatcher';
import FavouriteStore from '../../../app/stores/FavouriteStore';

jest.mock('../../../app/dispatcher/appDispatcher');
const callback = Dispatcher.register.mock.calls[0][0];

const action = {
  actionType: 'GET_USER_FAVOURITES',
  archives: {
    title: 'some title',
    description: 'some description',
    url: 'some url'
  },
  favouriteSources: {
    sourceName: 'the source url',
  }
};

describe('FavouriteStore', () => {
  describe('store methods', () => {
    it('should have a addChangeListener method', () => {
      expect(FavouriteStore.addChangeListener).toBeDefined();
    });
    it('should have a removeChangeListener method', () => {
      expect(FavouriteStore.removeChangeListener).toBeDefined();
    });
  });
  describe('store updates', () => {
    callback(action);
    it('should should update store archives', () => {
      expect(FavouriteStore.getArchive()).toEqual(action.archives);
    });
    it('should should update store favouriteSources', () => {
      expect(FavouriteStore.getFavouriteSources())
      .toEqual(action.favouriteSources);
    });
  });
});
