import React from 'react';
import { shallow } from 'enzyme';
import FavouriteSourcesCard from
'../../../app/components/FavouriteSourcesCard.jsx';

const mockData = {
  id: 'abc-news-au',
  name: 'ABC News (AU)',
  description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
  url: 'http://www.abc.net.au/news',
  category: 'general',
  language: 'en',
  country: 'au',
  urlsToLogos: {
    small: '',
    medium: '',
    large: ''
  },
  sortBysAvailable: ['top']
};

describe('Favourites Component', () => {
  it('should render Favourites', () => {
    const wrapper = shallow(
        <FavouriteSourcesCard favouriteSources={mockData}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
