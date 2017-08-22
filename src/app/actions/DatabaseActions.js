import firebase from 'firebase';
import Dispatcher from '../dispatcher/AppDispatcher';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://asedeyhot-166810.firebaseio.com',
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();
const updates = {};

const DatabaseActions = {
  addToFavouriteSources: (googleId, source) => {
    updates[`users/${googleId}/favouriteSources/${source[0]}`] = source[1];
    db.ref().update(updates);
  },
  addToArchive: (googleId, headline) => {
    const newKey = firebase.database().ref().child('users').push().key;
    updates[`users/${googleId}/archives/${newKey}`] = {
      title: headline.title,
      author: headline.author,
      description: headline.description,
      url: headline.url,
      urlToImage: headline.urlToImage
    };
    db.ref().update(updates);
  },
  getUserFavourites: (googleId) => {
    db.ref(`users/${googleId}`).on('value')
    .then((snapshot) => {
      Dispatcher.dispatch({
        actionType: 'GET_USER_FAVOURITES',
        archives: snapshot.val().archives,
        favouriteSources: snapshot.val().favouriteSources
      });
    })
    .catch((error) => {
      return error;
    });
  }
};

export default DatabaseActions;
