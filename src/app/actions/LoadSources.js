import axios from 'axios';
import Dispatcher from '../dispatcher/appDispatcher';

const URL = 'https://newsapi.org/v1/sources?language=en';

// Get all news sources from NewsAPI
const loadSources = () => {
  return axios.get(URL).then((response) => {
    Dispatcher.dispatch({
      actionType: 'LOAD_SOURCES',
      sources: response.data.sources
    });
  }).catch((error) => {
    return error;
  });
};

export default loadSources;
