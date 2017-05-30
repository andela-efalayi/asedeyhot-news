/**
 * Mock function to test axios
 * @function mockApiCall
 * @return {object} promise
 */

import testdata from './dataMock.json';

const mockApiCall = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default mockApiCall;
