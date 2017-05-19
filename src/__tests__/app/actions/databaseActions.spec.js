import DatabaseActions from '../../../app/actions/DatabaseActions';

describe('DatabaseActions', () => {
  // let dispatchSpy = jest.spyOn(Dispatcher, 'dispatch');

  test('has an addToFavouriteSources method', () => {
    expect(DatabaseActions.addToFavouriteSources).toBeDefined();
  });
  test('as an addToArchive method', () => {
    expect(DatabaseActions.addToArchive).toBeDefined();
  });
  test('has a getUserFavourites method', () => {
    expect(DatabaseActions.getUserFavourites).toBeDefined();
  });
});
