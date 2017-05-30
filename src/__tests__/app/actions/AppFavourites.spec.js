import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import AppFavourites from '../../../app/actions/AppFavourites';

jest.mock('../../../app/actions/AppFavourites');
// jest.mock('firebase', () => ({
//   once(value) {
//     if (typeof value === 'object') {
//       return Promise.resolve({ 'snapshot.val()': {
//         favouriteArticles: {
//           author: 'BBC News',
//           description: 'article description',
//           url: 'article url'
//         },
//         favouriteSources: {
//           'Ars Technica': 'http://arstechnica.com'
//         }
//       } });
//     }
//     return Promise.reject({ error: 'someError' });
//   }
// }));

describe('AppFavourites', () => {
  // let dispatchSpy;
  // beforeEach(() => {
  //   dispatchSpy = jest.spyOn(AppDispatcher, 'dispatch');
  // });

  // afterEach(() => {
  //   dispatchSpy.mockReset();
  // });
  it('should have a saveToFavouriteArticles method', () => {
    expect(AppFavourites.saveToFavouriteArticles).toBeDefined();
  });
  it('should have a saveToFavouriteSOurces method', () => {
    expect(AppFavourites.saveToFavouriteSources).toBeDefined();
  });
  it('should have a getAll method', () => {
    expect(AppFavourites.getAll).toBeDefined();
  });
  describe('AppFavourites.getAll()', () => {
    it('should call dispatcher if successful', () => {
      // AppFavourites.getAll();
      // const mockDispatchCall = dispatchSpy.mock;
      // console.log(mockDispatchCall);
    });
  });
});
