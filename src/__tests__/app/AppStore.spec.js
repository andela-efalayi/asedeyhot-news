import AppStore from '../../app/store/AppStore';

jest.mock('../../app/dispatcher/appDispatcher');
jest.dontMock('../../app/store/AppStore');
jest.dontMock('object-assign');

describe('AppStore', () => {
  it('should exist', () => {
    expect(AppStore).toBeDefined();
  });
  describe('The store methods', () => {
    it('should have an addChangeListener method', () => {
      expect(AppStore.addChangeListener).toBeDefined();
    });
    it('should have a getSources method', () => {
      expect(AppStore.getSources).toBeDefined();
    });
    it('should have a getHeadlines method', () => {
      expect(AppStore.getHeadlines).toBeDefined();
    });
    it('should have a getSortResult method', () => {
      expect(AppStore.getSortResult).toBeDefined();
    });
  });
});
