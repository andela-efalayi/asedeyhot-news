import { filter, pullAt, remove } from 'lodash';
import CloudinaryAssets from '../constants/CloudinaryAssets';

/**
 * @summary Filters news sources using category name
 * @param {Array} newsSources
 * @param {String} categoryName
 * @returns {object} filtered result
 */
export function categoryFilter(newsSources, categoryName) {
  return filter(newsSources, { category: categoryName });
}

/**
 * @summary Gets a random number from 0 - categorySources.length
 * @param {Array} categorySources
 * @returns {number} index
 */
export function getRandomIndex(categorySources) {
  return Math.floor(Math.random() * categorySources.length);
}

/**
 * @summary Removes newsSource from categorySources
 * @param {Array} categorySources
 * @param {Object} newsSource
 * @returns {object} filterSources
 */
export function removeFromCategorySources(categorySources, newsSource) {
  const filteredSources = categorySources;
  remove(filteredSources, (categorySource) => {
    return categorySource === newsSource;
  });
  return filteredSources;
}

/**
 * @summary Generates an array of random numbers
 * @param {Number} min
 * @param {Number} max
 * @returns {Array} array of numbers
 */
export function generateRandomNumberArray(min, max) {
  const tempArray = new Array(max);
  const randomNumberArray = [];

  let i;
  for (i = 0; i < tempArray.length; i += 1) {
    const randomNumber = Math.floor((Math.random() * (max - (min + 1))) + min);
    if (!randomNumberArray.includes(randomNumber)) {
      randomNumberArray.push(randomNumber);
    }
  }
  return randomNumberArray;
}

/**
 * @summary Gets a random news source from categorySources
 * @param {Array} categorySources
 * @returns {object} featured catergory source
 */
export function getFeaturedCategorySource(categorySources) {
  return categorySources[getRandomIndex(categorySources)];
}

/**
 * @summary Gets top sources (excluding featuredSource)
 * @param {Array} categorySources
 * @param {Object} featuredSource
 * @returns {Array} selected top sources
 */
export function getSelectedTopSources(categorySources, featuredSource) {
  const sources = categorySources;
  const topSources = removeFromCategorySources(sources, featuredSource);
  const selectedTopIndexes = generateRandomNumberArray(0, topSources.length);
  pullAt(sources, selectedTopIndexes);
  return sources;
}

/**
 * @summary Gets image url for category
 * @param {String} categoryName
 * @returns {String} url
 */
export function getCategoryImage(categoryName) {
  return CloudinaryAssets[categoryName.toUpperCase()];
}

/**
 * @summary Sets categoryNewsSources attributes
 * @param {Array} categorySources
 * @returns {object} category news sources info
 */
export function setCategoryNewsSources(categorySources) {
  const categorySourcesLength = categorySources.length;

  let featuredSource;
  switch (true) {
  case categorySourcesLength >= 9:
    featuredSource = getFeaturedCategorySource(categorySources);
    return {
      featuredSource,
      topSources: getSelectedTopSources(categorySources, featuredSource)
    };
  default:
    return {
      featuredSource: categorySources[0],
      topSources: categorySources.slice(1)
    };
  }
}
