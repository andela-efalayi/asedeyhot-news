/**
 * Get News Sources from NewsAPI using axios
 * @module actions/GetNewsSources
 */

import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

/**
 * Base Url for getting news sources
 */

const URL = 'https://newsapi.org/v1/sources?language=en';

/**
 * @function getNewsSources
 * @return {func} axios
 */

const getNewsSources = () => {
  return axios.get(URL).then((response) => {
    /**
     * Calls disaptcher if request is successful
     */

    AppDispatcher.dispatch({
      actionType: AppActionTypes.GET_NEWS_SOURCES,
      sources: response.data.sources
    });

    /**
     * Throws error if request is unsuccessful
     */
  }).catch((error) => {
    throw error;
  });
};

export default getNewsSources;
