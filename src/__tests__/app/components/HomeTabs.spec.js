import React from 'react';
import { shallow } from 'enzyme';
import HomeTabs from '../../../app/components/HomeTabs.jsx';

describe('HomeTabs.jsx', () => {
  const wrapper = shallow(
      <HomeTabs />
  );
  it('should match HomeTabs component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have two tab elements', () => {
    expect(wrapper.node.props.children.length).toEqual(2);
    expect(wrapper.node.props.children[0].type.muiName).toEqual('Tab');
    expect(wrapper.node.props.children[1].type.muiName).toEqual('Tab');
  });
  describe('Tabs', () => {
    it('should data route paths', () => {
      expect(wrapper.node.props.children[0]
      .props['data-route']).toEqual('#/sources');
      expect(wrapper.node.props.children[1]
      .props['data-route']).toEqual('#/favourites');
    });
  });
});
