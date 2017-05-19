import React from 'react';
import { shallow } from 'enzyme';
import HomeTabs from '../../../app/components/HomeTabs.jsx';

describe('HomeTabs Component', () => {
  it('should render hometabs', () => {
    const wrapper = shallow(
        <HomeTabs />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
