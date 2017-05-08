import AppDispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = '&apiKey=213327409d384371851777e7c7f78dfe';
const AppActions = {
  getHeadlines(sourceInfo) {
    const sourceName = sourceInfo[0];
    const sourceId = sourceInfo[1];

    const SOURCE_URL = `${BASE_URL + sourceId}&sortBy=top${API_KEY}`;
    axios.get(SOURCE_URL).then((response) => {
      AppDispatcher.dispatch({
        actionType: 'GET_HEADLINES',
        source: sourceName,
        articles: response.data.articles
      });
    }).catch((error) => {
      console.log('An error occured: ', error);
    });
  }
};

export default AppActions;