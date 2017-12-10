/**
 * Get getFeaturedCategoryArticle from NewsAPI using axios
 * @module actions/getFeaturedCategoryArticle
 */

import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = process.env.API_KEY;

/**
 * @function getFeaturedCategoryArticle
 * @param {string} sourceId
 * @param {string} sortBy
 * @return {func} axios
 */

const getFeaturedCategoryArticle = (sourceId, sortBy) => {
  /**
   * Url used to get the articles
   */

  const URL = `${BASE_URL + sourceId}&sortBy=${sortBy}&apiKey=${API_KEY}`;

  return axios.get(URL).then((response) => {
    /**
     * Calls dispatcher if request is successful
     */

    AppDispatcher.dispatch({
      actionType: AppActionTypes.GET_FEATURED_CATEGORY_ARTICLE,
      featuredCategoryArticle: response.data.articles[0],
    });

    /**
     * Throws an error if request is unsuccessful
     */
  }).catch((error) => {
    throw error;
  });
};

export default getFeaturedCategoryArticle;
