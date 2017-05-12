import axios from 'axios';
import AppDispatcher from '../dispatcher/appDispatcher';

const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = '&apiKey=213327409d384371851777e7c7f78dfe';

const AppActions = {
  getHeadlines(sourceId, sortBys) {
    const SOURCE_URL = `${BASE_URL + sourceId}&sortBy=top${API_KEY}`;
    axios.get(SOURCE_URL).then((response) => {
      AppDispatcher.dispatch({
        actionType: 'GET_HEADLINES',
        articles: response.data.articles,
        sorts: sortBys
      });
    }).catch((error) => {
      return error;
    });
  },
  getParticularSort(sourceId, sortParam) {
    const SOURCE_URL = `${BASE_URL + sourceId}&sortBy=${sortParam + API_KEY}`;
    axios.get(SOURCE_URL).then((response) => {
      AppDispatcher.dispatch({
        actionType: 'GET_HEADLINES_BY_A_SORT',
        articles: response.data.articles,
      });
    }).catch((error) => {
      return error;
    });
  }
};

export default AppActions;
