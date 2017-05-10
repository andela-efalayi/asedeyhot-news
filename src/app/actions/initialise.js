import axios from 'axios';
import AppDispatcher from '../dispatcher/appDispatcher';

const URL = 'https://newsapi.org/v1/sources?language=en';

const AppDefault = {
	// Define App Default to load
  init() {
    axios.get(URL).then((response) => {
      AppDispatcher.dispatch({
  		actionType: 'INITIALISE_APP',
  		sources: response.data.sources
		});
  	}).catch((error) => {
    	console.log(error);
  	});
  }
};

export default AppDefault;
