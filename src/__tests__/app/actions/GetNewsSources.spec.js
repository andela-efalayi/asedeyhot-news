import mockedAxios from '../../../__mocks__/axios';
import AppActionTypes from '../../../app/constants/AppActionTypes';
import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import LoadNewsSources from '../../../app/actions/GetNewsSources';

describe('GetNewsSources.js', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(AppDispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should get news sources from NewsAPI when called', () =>
    LoadNewsSources().then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();

      expect(mockDispatchCall.actionType)
      .toEqual(AppActionTypes.GET_NEWS_SOURCES);
      expect(mockDispatchCall.sources).toBeInstanceOf(Object);
      expect(mockDispatchCall.sources.length).toEqual(6);
      expect(typeof mockDispatchCall.sources[3].name).toEqual('string');
      expect(mockDispatchCall.sources[3].name).toEqual('Associated Press');
      expect(typeof mockDispatchCall.sources[3].sortBysAvailable)
      .toEqual('object');
      expect(mockDispatchCall.sources[3].sortBysAvailable)
      .toEqual(['top', 'latest']);
    })
  );
});
