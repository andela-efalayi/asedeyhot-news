import mockedAxios from '../../../__mocks__/axios';
import AppActionTypes from '../../../app/constants/AppActionTypes';
import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import LoadArticles from '../../../app/actions/LoadArticles';

describe('LoadSources method using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should load news sources when called', () =>
    LoadArticles().then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.actionType).toEqual(AppActionTypes.LOAD_ARTICLES);
      expect(mockDispatchCall.articles).toBeInstanceOf(Object);
      expect(mockDispatchCall.articles.length).toEqual(3);
      expect(mockDispatchCall.articles[0].author).toEqual('BBC News');
    })
  );
});
