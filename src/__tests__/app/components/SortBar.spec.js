import React from 'react';
import { shallow } from 'enzyme';
import SortBar from '../../../app/components/SortBar.jsx';

jest.dontMock('../../../app/components/SortBar.jsx');

const sortBarDetails = {
  currentSortOption: 'top',
  title: 'ABC News (AU)',
  sortOptions: ['top']
};

describe('SortBar Component', () => {
  const wrapper = shallow(<SortBar
    sortOptions={sortBarDetails.sortOptions}
    id={sortBarDetails.id}
    title={sortBarDetails.title} />);
  it('should render a SortBar', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('select field should have 1 item', () => {
    expect(wrapper.nodes[0]
  .props.children[1].props.children.props.children.length).toEqual(1);
  });
  it('key should be "top"', () => {
    expect(wrapper.nodes[0].props.children[1].props
    .children.props.children[0].key).toEqual('top');
  });
});
