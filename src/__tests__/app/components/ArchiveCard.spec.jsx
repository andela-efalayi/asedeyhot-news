import React from 'react';
import { shallow } from 'enzyme';
import ArchiveCard from
'../../../app/components/ArchiveCard.jsx';

const mockData = {
  author: 'BBC News',
  title: 'General Election 2017: Labour to rip up Tory Brexit plan',
  description: 'The party says it would prioritise jobs.',
  url: 'http://www.bbc.co.uk/news/uk-politics-39698465',
  urlToImage: 'https://ichef-1.bbci.co.uk/news/12509/95771057_mediaitem95771056.jpg',
  publishedAt: '2017-04-25T06:32:28+00:00'
};

describe('Favourites Component', () => {
  it('should render Favourites', () => {
    const wrapper = shallow(
        <ArchiveCard headlines={mockData}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
