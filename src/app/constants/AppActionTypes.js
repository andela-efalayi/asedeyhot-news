import keyMirror from 'keymirror';

// Define action constants
const AppActionTypes = keyMirror({
  GET_HEADLINES: null,   // get news headlines based on sources
  GET_HEADLINES_BY_A_SORT: null,  // get news
  GET_USER_FAVOURITES: null,
  LOAD_SOURCES: null
});

export default AppActionTypes;
