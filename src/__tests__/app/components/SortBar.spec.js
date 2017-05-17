import React from 'react';
import { shallow } from 'enzyme';
import SortBar from '../../../app/components/SortBar.jsx';

describe('SortBar Component', () => {
  it('should render a SortBar', () => {
    const wrapper = shallow(
        <SortBar />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
