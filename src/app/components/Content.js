import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {List, ListItem} from 'material-ui/List';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: '100vh',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    "author": "Mix",
    "title": "Mark Zuckerberg finally addresses the string of violent deaths on Facebook",
    "description": "Facebook has unintentionally played host to an unfortunate string of horribly violent incidents over the last few months and CEO Mark Zuckerberg is finally addressing the issue head-on.\r\n\r\nIn ...",
    "url": "https://thenextweb.com/facebook/2017/05/03/facebook-mark-zuckerberg-violent/",
    "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/03/Facebook_TNW.jpg",
    "publishedAt": "2017-05-03T17:43:28Z"
  },
{
    "author": "TNW Deals",
    "title": "Launch your career as a white hat hacker with this in-depth training — for under $20",
    "description": "If you’re looking to jump into an intriguing new career (and up your paycheck in the process), there are a lot of pluses to consider in becoming a professional hacker. As opposed ...",
    "url": "https://thenextweb.com/offers/2017/05/03/launch-career-white-hat-hacker-depth-training-20/",
    "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/216YE2w.jpg",
    "publishedAt": "2017-05-03T17:33:02Z"
} ,
{
    "author": "Rachel Kaser",
    "title": "Netflix & Marvel’s The Defenders gets a smashing trailer",
    "description": "Netflix just released the official trailer for its version of a watershed Avengers team-up: The Defenders. If you watch nothing else this morning, watch this:\r\n\r\nhttps://www.youtube.com/watch?v=4h3m7B4v6Zc\r\n\r\nTry ...",
    "url": "https://thenextweb.com/shareables/2017/05/03/netflix-marvels-defenders-gets-smashing-trailer/",
    "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/The-Defenders.jpg",
    "publishedAt": "2017-05-03T17:08:29Z"
  },
{
    "author": "Matthew Hughes",
    "title": "Windows 10 S can’t succeed if Microsoft doesn’t learn from its mistakes",
    "description": "Yesterday, Microsoft announced its newest operating system: Windows 10 S. The S, we're told, stands for several things, like speed and security.\r\n\r\nAllow me, if I may, to propose an ...",
    "url": "https://thenextweb.com/insider/2017/05/03/windows-10-s-cant-succeed-microsoft-doesnt-learn-mistakes/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/WindowsCloud_Security_Cortana_1920.jpg",
    "publishedAt": "2017-05-03T16:48:47Z"
  },
{
    "author": "Mix",
    "title": "The ‘new page’ tab in Chrome is not symmetrical… and now I hate Google",
    "description": "Once you see it, you can never unsee it. It turns out Google has somehow failed to make the 'new tab' page in Chrome fully symmetrical.\r\n\r\nAs you can notice in the image above, while ...",
    "url": "https://thenextweb.com/google/2017/05/03/google-chrome-new-tab-not-symmetrical/",
    "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/arrrghh.jpg",
    "publishedAt": "2017-05-03T16:42:39Z"
  },
{
    "author": "Mix",
    "title": "Life-altering protip: YOU CAN BACKSPACE ON THE IPHONE CALCULATOR!!!!",
    "description": "While my transition from Android to iOS went without any significant hiccups, one thing that has been driving me nuts for months is that I never figured out how to properly use the ...",
    "url": "https://thenextweb.com/apple/2017/05/03/iphone-hidden-way-backspace-calculator/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/IPhone_7_black_mock-up.jpg",
    "publishedAt": "2017-05-03T14:32:01Z"
  },
{
    "author": "Jamie Tolentino",
    "title": "2017 predictions for Big Data, IoT, and AI",
    "description": "There’s no doubt that there are currently three big trends in business models: Internet of Things (IoT), Big Data and artificial intelligence (AI). From the still-fragmented internet ...",
    "url": "https://thenextweb.com/artificial-intelligence/2017/05/03/2017-predictions-for-big-data-iot-and-ai/",
    "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/The-Golden-Wheel-Fortune-Teller.jpg",
    "publishedAt": "2017-05-03T14:23:33Z"
  },
{
    "author": "Mix",
    "title": "Microsoft is forcing Windows 10 S users to rely on Edge and Bing by default",
    "description": "Microsoft unveiled its brand new Chrome OS challenger, Windows 10 S, at a special event in New York yesterday, but it turns out the company has a nasty surprise in store for early ...",
    "url": "https://thenextweb.com/microsoft/2017/05/03/microsoft-windows-10-s-browser-edge/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-03-at-12.36.56.png",
    "publishedAt": "2017-05-03T13:19:20Z"
  },
{
    "author": "Francis Turner",
    "title": "No Ralph Nader, “fake news” is not advertising’s fault",
    "description": "I know advertising isn’t an industry viewed with a whole lot of trust. Gallup polling year after year puts perception of ethics for our ilk alongside senators and car salespeople. ...",
    "url": "https://thenextweb.com/opinion/2017/05/03/fake-news-not-advertisings-fault/",
    "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/fakenews.jpg",
    "publishedAt": "2017-05-03T12:56:46Z"
  },
{
    "author": "Mix",
    "title": "Slack makes it easier for teams to hook up freelancers with guest accounts",
    "description": "Slack wants to streamline the process for granting temps and freelancers access to your team's communication.\r\n\r\nThe company is introducing two new updates to help administrators easily ...",
    "url": "https://thenextweb.com/apps/2017/05/03/slack-freelancer-guest-account/",
    "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-03-at-11.08.37.jpg",
    "publishedAt": "2017-05-03T12:22:13Z"
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Content = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.url}
          title={tile.title}
          subtitle={
            <ul>
              <li> <a href={tile.url} target="_blank ">{tile.url} </a></li>
              <li> {tile.author} </li>
            </ul>
          }
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.urlToImage} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default Content;