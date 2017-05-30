import mockedAxios from '../../../__mocks__/axios';
import AppActionTypes from '../../../app/constants/AppActionTypes';
import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import LoadArticles from '../../../app/actions/GetArticles';

describe('GetSources.js', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should get articles from NewsAPI when called', () =>
    LoadArticles().then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.actionType).toEqual(AppActionTypes.GET_ARTICLES);
      expect(mockDispatchCall.articles).toBeInstanceOf(Object);
      expect(mockDispatchCall.articles.length).toEqual(3);
      expect(mockDispatchCall.articles[0].author).toEqual('BBC News');
    })
  );
});
