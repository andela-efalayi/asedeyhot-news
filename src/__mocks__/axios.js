// Mock function to test axios.
import testdata from './dataMock.json';

const mockApiCall = {
  get() {
    return Promise.resolve(testdata);
  }
};

export default mockApiCall;
