import axios from 'axios';
import Dispatcher from '../dispatcher/appDispatcher';

const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = process.env.API_KEY;

const AppActions = {
  getHeadlines: (sourceId) => {
    const SOURCE_URL = `${BASE_URL + sourceId}&sortBy=top&apiKey=${API_KEY}`;
    axios.get(SOURCE_URL).then((response) => {
      Dispatcher.dispatch({
        actionType: 'GET_HEADLINES',
        articles: response.data.articles,
      });
    }).catch((error) => {
      return error;
    });
  },
  getParticularSort: (sourceId, sortParam) => {
    const SOURCE_URL =
    `${BASE_URL + sourceId}&sortBy=${sortParam}&apiKey=${API_KEY}`;
    axios.get(SOURCE_URL).then((response) => {
      Dispatcher.dispatch({
        actionType: 'GET_HEADLINES_BY_A_SORT',
        articles: response.data.articles,
      });
    }).catch((error) => {
      return error;
    });
  }
};

export default AppActions;
