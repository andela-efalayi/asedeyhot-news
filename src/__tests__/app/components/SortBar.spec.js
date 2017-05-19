import React from 'react';
import { shallow } from 'enzyme';
import SortBar from '../../../app/components/SortBar.jsx';

jest.dontMock('../../../app/components/SortBar.jsx');

const sortBarDetails = {
  currentSortOption: 'top',
  id: 'abc-news-au',
  title: 'ABC News (AU)',
  sortOptions: ['top']
};

describe('SortBar Component', () => {
  const wrapper = shallow(<SortBar />);
  it('should render a SortBar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders 2 child nodes', () => {
    expect(wrapper.node.props.children).toHaveLength(2);
  });

  it('renders a h4 element', () => {
    expect(wrapper.node.props.children[0].props.children.type).toMatch('h4');
  });

  it('renders a title for SortBar', () => {
    const wrapperWithProps = shallow(<SortBar
    sortOptions={sortBarDetails.sortOptions}
    id={sortBarDetails.id}
    title={sortBarDetails.title} />);
    expect(wrapperWithProps.nodes[0].props.id).toEqual(sortBarDetails.id);
    expect(wrapperWithProps.nodes[0].props.children[0].props.children.props.children[0]).toEqual(sortBarDetails.title);
  });
});
