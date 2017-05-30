/**
 * Get Articles from NewsAPI using axios
 * @module actions/GetArticles
 */

import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';

const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = process.env.API_KEY;

/**
 * @function getArticles
 * @param {string} sourceId
 * @param {string} sortBy
 * @return {func} axios
 */

const getArticles = (sourceId, sortBy) => {
  /**
   * Url used to get the articles
   */

  const URL = `${BASE_URL + sourceId}&sortBy=${sortBy}&apiKey=${API_KEY}`;

  return axios.get(URL).then((response) => {
    /**
     * Calls dispatcher if request is successful
     */

    AppDispatcher.dispatch({
      actionType: 'GET_ARTICLES',
      articles: response.data.articles,
    });

    /**
     * Throws an error if request is unsuccessful
     */
  }).catch((error) => {
    throw error;
  });
};

export default getArticles;
