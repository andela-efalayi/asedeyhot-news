import React from 'react';
import { shallow } from 'enzyme';
import HomeTabs from '../../../app/components/HomeTabs.jsx';

describe('HomeTabs.jsx', () => {
  it('should match HomeTabs component snapshot', () => {
    const wrapper = shallow(
        <HomeTabs />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
