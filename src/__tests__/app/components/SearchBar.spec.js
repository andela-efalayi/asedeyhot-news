import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../../app/components/SearchBar.jsx';

describe('SearchBar.jsx', () => {
  it('should match component snapshot', () => {
    const wrapper = shallow(
        <SearchBar />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
