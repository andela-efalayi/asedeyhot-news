import firebase from 'firebase';
import dbConfig from '../../../db.config';
import Dispatcher from '../dispatcher/AppDispatcher';

firebase.initializeApp(dbConfig);

const db = firebase.database();
const user = JSON.parse(localStorage.getItem('user'));
const updates = {};

const DatabaseActions = {
  addToFavouriteSources: (source) => {
    updates[`users/${user.name}/favouriteSources/${source[0]}`] = source[1];
    db.ref().update(updates);
  },
  addToArchive: (headline) => {
    const newKey = firebase.database().ref().child('users').push().key;
    updates[`users/${user.name}/archives/${newKey}`] = {
      title: headline.title,
      author: headline.author,
      description: headline.description,
      url: headline.url,
      urlToImage: headline.urlToImage
    };
    db.ref().update(updates);
  },
  getUserFavourites: () => {
    db.ref(`users/${user.name}`).once('value')
    .then((snapshot) => {
      Dispatcher.dispatch({
        actionType: 'GET_USER_FAVOURITES',
        archives: snapshot.val().archives,
        favouriteSources: snapshot.val().favouriteSources
      });
    });
  }
};

export default DatabaseActions;
