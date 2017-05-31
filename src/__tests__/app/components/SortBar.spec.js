import React from 'react';
import { shallow } from 'enzyme';
import SortBar from '../../../app/components/SortBar.jsx';

jest.dontMock('../../../app/components/SortBar.jsx');

const sortBarDetails = {
  currentSortOption: 'top',
  title: 'ABC News (AU)',
  sortOptions: ['top']
};

describe('SortBar.jsx', () => {
  const wrapper = shallow(<SortBar
    sortOptions={sortBarDetails.sortOptions}
    id={sortBarDetails.id}
    title={sortBarDetails.title} />);
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a select field with one option item', () => {
    expect(wrapper.nodes[0]
  .props.children[1].props.children.props.children.length).toEqual(1);
  });
  it('should have have option item with key "top"', () => {
    expect(wrapper.nodes[0].props.children[1].props
    .children.props.children[0].key).toEqual('top');
  });
});
