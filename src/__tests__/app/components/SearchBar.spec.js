import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../../app/components/SearchBar.jsx';

describe('SearchBar.jsx', () => {
  const wrapper = shallow(
      <SearchBar />
  );
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should display an hint text', () => {
    expect(wrapper.find('.filter').childAt(0)
    .node.props.hintText).toBe('Search for a news source');
  });
});
