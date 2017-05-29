import AppDispatcher from '../../../app/dispatcher/AppDispatcher';
import NewsSourcesStore from '../../../app/stores/NewsSourcesStore';
import AppActionTypes from '../../../app/constants/AppActionTypes';

jest.mock('../../../app/dispatcher/AppDispatcher');
jest.dontMock('../../../app/stores/NewsSourcesStore');
const callback = AppDispatcher.register.mock.calls[0][0];

describe('ArticlesStore', () => {
  const payload = {
    actionType: AppActionTypes.LOAD_NEWS_SOURCES,
    sources: [{
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: "Australia's most trusted source",
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top']
    },
    {
      id: 'bbc-news',
      name: 'BBC News',
      description: 'Use BBC News for up-to-the-minute news',
      url: 'http://www.bbc.co.uk/news',
      category: 'general',
      language: 'en',
      country: 'gb',
      urlsToLogos: {
        small: '',
        medium: '',
        large: ''
      },
      sortBysAvailable: ['top']
    }]
  };
  it('initial sources array should be empty', () => {
    expect(NewsSourcesStore.sources.length).toEqual(0);
  });
  it('registers payload', () => {
    callback(payload);
    expect(NewsSourcesStore.getAllSources().length)
    .toEqual(payload.sources.length);
  });
});
