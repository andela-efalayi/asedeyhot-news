import axios from 'axios';
import AppDispatcher from '../dispatcher/appDispatcher';

const URL = 'https://newsapi.org/v1/sources?language=en';

// Define App Default to load
const AppDefault = {
  init() {
    axios.get(URL).then((response) => {
      AppDispatcher.dispatch({
        actionType: 'INITIALISE_APP',
        sources: response.data.sources
      });
    }).catch((error) => {
      return error;
    });
  }
};

export default AppDefault;
