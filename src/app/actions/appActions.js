import AppDispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';

const URL = 'https://newsapi.org/v1/sources?language=en';
// https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey={API_KEY}
const ARTICLE_BASE_URL = 'https://newsapi.org/v1/articles?source=';
const latest = '&sortBy=latest';
const top = '&sortBy=top';
const API_KEY = '&apiKey=213327409d384371851777e7c7f78dfe';

const AppActions = {
	// Define App Functions
	getSources (){
		axios.get(URL)
		.then(function(response){
			AppDispatcher.dispatch({
				actionType: "GET_ALL_NEWS_SOURCES",
				sources: response.data.sources
			});
		})
		.catch(function(error){
			console.log(error);
		});
	},

	getHeadlines (source){
		let headlineUrl = null;
		let headlines = {};
		source.sorts.forEach(sort => {
			//headlineUrl = `${ARTICLE_BASE_URL + source.id + &sortBy= + sort + API_KEY}`;
			headlineUrl = `${ARTICLE_BASE_URL + source.id}&sortBy=${sort + API_KEY}`;
			axios.get(headlineUrl)
			.then(function(response){
				headlines[`${sort}`] = response.data.articles;
			})
			.catch(function(error){
				console.log("Sort could not be completed");
			});
		});
		AppDispatcher.dispatch({
			actionType: "GET_ALL_HEADLINES",
			headlines: headlines
		});
	}
};

export default AppActions;