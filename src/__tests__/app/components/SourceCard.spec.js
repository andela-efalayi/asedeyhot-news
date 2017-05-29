import React from 'react';
import { shallow } from 'enzyme';
import mockedLocalStorage from '../../../__mocks__/localStorage';
import SourceCard from '../../../app/components/SourceCard.jsx';

jest.dontMock('../../../app/components/SourceCard.jsx');
window.localStorage = mockedLocalStorage;
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
  // beforeEach(() => {
  //   jest.mock('localStorage', () => mockedLocalStorage);
  // });
  const wrapper = shallow(
    <SourceCard source={source}/>
  );
  it('renders a SourceCard for a news source', () => {
    expect(wrapper.name()).toEqual('Card');
  });
  it('node has 3 children', () => {
    expect(wrapper.node.props.children.length).toEqual(3);
  });
  it('to have 1 title node', () => {
    expect(wrapper.find('.title').length).toEqual(1);
  });
  it('to have 1 description node', () => {
    expect(wrapper.find('.card-description').length).toEqual(1);
  });
  it('description to have 123 characters', () => {
    expect(wrapper.find('.card-description')
    .children().node.length).toEqual(123);
  });
  it('description node to have a function', () => {
    expect(typeof wrapper.find('.card-description')
    .children().props).toEqual('function');
  });
  console.log(wrapper.find('.card-description').children().props());
  // it('should render 2 elements in CardActions', () => {
  //   expect(wrapper.node.props.children[2]
  //   .props.children).toHaveLength(2);
  // });
  // it('should render an h3 tag with the required props', () => {
  //   expect(wrapper.nodes[0].props.children[0]
  //   .props.children[0].props.children
  //   .props.href).toEqual(source.url);
  //   expect(wrapper.nodes[0].props.children[0]
  //   .props.children[0].props.children
  //   .props.children).toEqual(source.name);
  // });
  // it('should render an h6 tag with the category of news source', () => {
  //   expect(wrapper.nodes[0].props.children[0]
  //   .props.children[1].props.children).toEqual(source.category.toUpperCase());
  // });
});
