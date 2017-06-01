/**
 * Mock function for axios
 * @function mockApiCall
 * @return {object} promise
 */
import testdata from './axiosData.json';

const mockApiCall = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default mockApiCall;
