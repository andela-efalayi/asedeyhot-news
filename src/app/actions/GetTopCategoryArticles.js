/**
 * Get Articles from NewsAPI using axios
 * @module actions/getCategoryArticles
 */

import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActionTypes from '../constants/AppActionTypes';

const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = process.env.API_KEY;

/**
 * @function getCategoryArticles
 * @param {string} sourceId
 * @param {string} sortBy
 * @return {func} axios
 */

const resolveArticles = (topSources) => {
  return new Promise((resolve) => {
    const topArticles = [];
    topSources.forEach((source) => {
      const id = source.id;
      const sortBy = source.sortBysAvailable[0];
      const URL = `${BASE_URL + id}&sortBy=${sortBy}&apiKey=${API_KEY}`;
      axios.get(URL).then((response) => {
        topArticles.push({
          content: response.data.articles[0],
          source: source.name
        });
        if (topArticles.length === topSources.length) {
          resolve(topArticles);
        }
      });
    });
  });
};

const getTopCategoryArticles = (topSources) => {
  return resolveArticles(topSources).then((response) => {
    AppDispatcher.dispatch({
      actionType: AppActionTypes.GET_TOP_CATEGORY_ARTICLES,
      topArticles: response,
    });
  });
};

export default getTopCategoryArticles;
