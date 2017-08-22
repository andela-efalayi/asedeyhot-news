/**
 * Mock values for app components
 */
export const articleWithNoDescription = {
  author: 'BBC News',
  title: 'US submarine arrives in South Korea',
  description: undefined,
  url: 'http://www.bbc.co.uk/news/world-asia-39701481',
  urlToImage: 'http://image-url/image.jpg',
  publishedAt: '2017-04-25T02:59:53+00:00'
};

export const articleWithDescription = {
  author: 'BBC News',
  title: 'US submarine arrives in South Korea',
  description: 'It comes amid worries of a North Korean missile',
  url: 'http://www.bbc.co.uk/news/world-asia-39701481',
  urlToImage: 'http://image-url/image.jpg',
  publishedAt: '2017-04-25T02:59:53+00:00'
};

export const favouriteArticles = {
  title: {
    author: 'BBC News',
    description: 'The party says it would prioritise',
    url: 'http://www.bbc.co.uk/news/uk-politics-39698465'
  }
};

export const favouriteSources = {
  'Associated Press': 'http://bigstory.ap.org'
};

export const sortBarDetails = {
  currentSortOption: 'top',
  title: 'ABC News (AU)',
  sortOptions: ['top']
};

export const sourceWithLongDescription = {
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  category: 'general',
  description: 'News, analysis from the Middle East and worldwide,' +
    'multimedia and interactives, opinions, documentaries, podcasts,' +
    'long reads and broadcast schedule.',
  url: 'http://www.aljazeera.com',
  sortBysAvailable: ['top', 'latest']
};

export const sourceWithShortDescription = {
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  category: 'general',
  description: 'News, analysis from the Middle East',
  url: 'http://www.aljazeera.com',
  sortBysAvailable: ['top', 'latest']
};

export const user = {
  name: 'Username',
  imageUrl: 'https://dummyimage.com/600x400/000000/0011ff'
};
