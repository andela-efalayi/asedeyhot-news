import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../../app/components/SearchBar.jsx';

describe('SearchBar Component', () => {
  it('should render a textfield', () => {
    const wrapper = shallow(
        <SearchBar />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
