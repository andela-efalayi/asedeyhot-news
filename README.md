[![Build Status](https://travis-ci.org/andela-efalayi/asedeyhot-news.svg?branch=updates)](https://travis-ci.org/andela-efalayi/asedeyhot-news) [![Coverage Status](https://coveralls.io/repos/github/andela-efalayi/asedeyhot-news/badge.svg?branch=updates)](https://coveralls.io/github/andela-efalayi/asedeyhot-news?branch=updates)

# AsEDeyHot 
This news feed application gathers latest, popular, and top headlines from around the globe. 
It consumes the NewsAPI which provides at least 60 news sources - including CNN,BBC, and TechCrunch.

###### App Features
- A user able to access the full functionalities of the app by loging in with a Google+ account
- The user can view sources from at least 60 news sites from around the globe
- The user can like (or add to Favourites) a news source
- The user can view headlines from a particular news source(e.g BBC News)
- The user can sort headlines and view them (depending on the available sort parameters for that particular news source)
- The user can add an enticing (or very interesting headline) to an archive

***
#### Technology
This application was developed purely with JavaScript using React and the Flux Architecture.

###### Dependencies
- Babel
- Material-UI and BootStrap were used to implement the UI of the application
- React
- React-dom
- Webpack

***
#### Getting Started

- Clone the project from repository [github.com/andela-efalayi/asedeyhot-news](https://github.com/andela-efalayi/asedeyhot-news)
- In your terminal, cd into the cloned folder and run `npm install`. This installs all the app's dependencies.
- Run npm start, open browser, and type `localhost:3000`. This runs the application on your localhost.
- Alternatively, you can access the app on [asedeyhot-news.herokuapp.com](https://asedeyhot-news.herokuapp.com)

***
#### How to Contribute
I welcome any form of contribution. If you feel something can be done better or there's an issue that needs to be fixed
or you are just interested in a specific part of the project, but you are not sure where to begin, feel free to ask.
On the other hand if the contribution you wish to make has not been documented in an existing, please [create new issue](https://github.com/andela-efalayi/asedeyhot-news/issues/new) before submitting your [pull request](https://help.github.com/articles/about-pull-requests/).

#### Limitations
- Presently, this news app can not share articles/headlines. This is a future 
funcationality that would be implemented.

***
#### Testing
All app components, actions, and stores were tested using [Facebook's Jest](https://facebook.github.io/jest/)
The test files can be found in the [__tests__ folder](../src/__tests__).

- To run the tests, run `npm test` on the command line. This automatically runs `jest` on all test files.
- You can also run `jest` directly. However, [jest-cli](https://www.npmjs.com/package/jest-cli) needs to be installed globally on your machine.

***
###### Author
```block
Esther Falayi | Andela, Nigeria
```
