import mockedAxios from '../../../__mocks__/axios';
import AppActionTypes from '../../../app/constants/AppActionTypes';
import Dispatcher from '../../../app/dispatcher/appDispatcher';
import AppActions from '../../../app/actions/appActions';

describe('getHeadlines method using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(Dispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should get headlines for a source', () =>
    AppActions.getHeadlines('bbc-news')
    .then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.actionType).toEqual(AppActionTypes.GET_HEADLINES);
      expect(mockDispatchCall.articles).toBeInstanceOf(Object);
      expect(mockDispatchCall.articles[0].author).toEqual('BBC News');
    }));

  it('should sort headlines for a source by a sort parameter ', () =>
    AppActions.getParticularSort('bbc-news', 'top')
    .then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.actionType)
      .toEqual(AppActionTypes.GET_HEADLINES_BY_A_SORT);
      expect(mockDispatchCall.articles).toBeInstanceOf(Object);
      expect(mockDispatchCall.articles[0].author).toEqual('BBC News');
    }));
});
