// import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import AppFavourites from '../../../app/actions/AppFavourites';

jest.mock('../../../app/actions/AppFavourites');

describe('AppFavourites', () => {
  it('should have a saveToFavouriteArticles method', () => {
    expect(AppFavourites.saveToFavouriteArticles).toBeDefined();
  });
  it('should have a saveToFavouriteSources method', () => {
    expect(AppFavourites.saveToFavouriteSources).toBeDefined();
  });
  it('should have a getAll method', () => {
    expect(AppFavourites.getAll).toBeDefined();
  });
  describe('AppFavourites.getAll()', () => {
    it('should call dispatcher if successful', () => {
    });
  });
});
