import mockedAxios from '../../../__mocks__/axios';
import AppActionTypes from '../../../app/constants/AppActionTypes';
import Dispatcher from '../../../app/dispatcher/appDispatcher';
import LoadSources from '../../../app/actions/LoadSources';

describe('LoadSources method using Promises', () => {
  let dispatchSpy;
  beforeEach(() => {
    jest.mock('axios', () => mockedAxios);
    dispatchSpy = jest.spyOn(Dispatcher, 'dispatch');
  });

  afterEach(() => {
    dispatchSpy.mockReset();
  });

  it('should load news sources when called', () =>
    LoadSources().then(() => {
      const mockDispatchCall = dispatchSpy.mock.calls[0][0];
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockDispatchCall.actionType).toEqual(AppActionTypes.LOAD_SOURCES);
      expect(mockDispatchCall.sources).toBeInstanceOf(Object);
      expect(mockDispatchCall.sources[0].name).toEqual('ABC News (AU)');
    })
  );
});
