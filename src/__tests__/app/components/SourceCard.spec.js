import React from 'react';
import { shallow } from 'enzyme';
import SourceCard from '../../../app/components/SourceCard.jsx';

jest.dontMock('../../../app/components/SourceCard.jsx');

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
  const wrapper = shallow(
        <SourceCard source={source}/>
    );
  it('renders a SourceCard for a news source', () => {
    expect(wrapper.name()).toEqual('Card');
  });

  it('should render 2 elements in CardActions', () => {
    expect(wrapper.node.props.children[2]
    .props.children).toHaveLength(2);
  });
  it('should render an h3 tag with the required props', () => {
    expect(wrapper.nodes[0].props.children[0]
    .props.children[0].props.children
    .props.href).toEqual(source.url);
    expect(wrapper.nodes[0].props.children[0]
    .props.children[0].props.children
    .props.children).toEqual(source.name);
  });
  it('should render an h6 tag with the category of news source', () => {
    expect(wrapper.nodes[0].props.children[0]
    .props.children[1].props.children).toEqual(source.category.toUpperCase());
  });
});
