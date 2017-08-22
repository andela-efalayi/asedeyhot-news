/**
 * App Favourites
 * @module actions/AppFavourites
 */

import firebase from 'firebase';
import AppDispatcher from '../dispatcher/AppDispatcher';

/**
 * Firebase config
 */

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://asedeyhot-166810.firebaseio.com',
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

/**
 * Initialise Firebase
 */

firebase.initializeApp(config);

const currentUser = JSON.parse(localStorage.getItem('user'));
const db = firebase.database();
const updates = {};

const AppFavourites = {
  /**
   * Returns the user's googleId
   * @method AppFavourites
   * @return {string} currentUser.gooleId
   */

  getGoogleId() {
    if (!currentUser) {
      return null;
    }
    return currentUser.googleId;
  },

  /**
   * Saves a new favourite article to the database
   * @method AppFavourites
   * @param {object} article
   * @return {object} promise
   */

  saveToFavouriteArticles(article) {
    const googleId = this.getGoogleId();
    const promise = new Promise((resolve, reject) => {
      if (googleId === null) {
        reject('You do not have access');
      } else {
        updates[`users/${googleId}/favouriteArticles/${article.title}`] = {
          title: article.title,
          author: article.author,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage
        };
        db.ref().update(updates);
        resolve('Added to favourite articles');
      }
    });
    return promise;
  },

  /**
   * @memberof AppFavourites
   * Saves a new favourite source to the database
   * @method AppFavourites
   * @param {object} source
   * @return {object} promise
   */

  saveToFavouriteSources(source) {
    const googleId = this.getGoogleId();
    const promise = new Promise((resolve, reject) => {
      if (googleId === null) {
        reject('You do not have access');
      } else {
        updates[`users/${googleId}/favouriteSources/${source.name}`]
         = source.url;
        db.ref().update(updates);
        resolve('Added to favourite sources');
      }
    });
    return promise;
  },

  /**
   * Gets all the user's favourites from database
   * @memberof AppFavourites
   */

  getAll() {
    const googleId = this.getGoogleId();
    db.ref(`users/${googleId}`).once('value')
    .then((snapshot) => {
      /**
       * Calls dispatcher if successful
       */
      AppDispatcher.dispatch({
        actionType: 'GET_ALL_FAVOURITES',
        favouriteArticles: snapshot.val().favouriteArticles,
        favouriteSources: snapshot.val().favouriteSources
      });
    })
    .catch((error) => {
      return error;
    });
  }
};

export default AppFavourites;
