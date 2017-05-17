import React from 'react';
import { shallow } from 'enzyme';
import SourceCard from '../../../app/components/SourceCard.jsx';

const source = {
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  category: 'general',
  description: 'News, analysis from the Middle East and worldwide,' +
    'multimedia and interactives, opinions, documentaries, podcasts,' +
    'long reads and broadcast schedule.',
  url: 'http://www.aljazeera.com',
  sortBysAvailable: ['top', 'latest']
};

describe('SourceCard Component', () => {
  it('should render a SourceCard for a news source', () => {
    const wrapper = shallow(
        <SourceCard source={source}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
