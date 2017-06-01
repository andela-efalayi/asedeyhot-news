import React from 'react';
import { shallow } from 'enzyme';
import UserAvatar from '../../../app/components/UserAvatar.jsx';
import * as mockValue from '../../../__mocks__/mockValues';

describe('UserAvatar.jsx', () => {
  const wrapper = shallow(
        <UserAvatar user={mockValue.user}/>
    );
  describe('Component', () => {
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should have a primaryText equal to the name of the user', () => {
      expect(wrapper.prop('primaryText')).toEqual(mockValue.user.name);
    });
    it('should have a ListItem as a parent element', () => {
      expect(wrapper.name()).toEqual('ListItem');
    });
    it('should have a tooltip element', () => {
      expect(wrapper.prop('rightAvatar')
      .props.tooltip).toEqual('click to sign out');
    });
    it('should display a popover for user to sign out', () => {
      expect(wrapper.find('.signOutPopOver')).toHaveLength(1);
      expect(wrapper.find('.signOutPopOver').children).toHaveLength(1);
    });
  });
  describe('.signOutPopover', () => {
    const initialState = wrapper.find('.signOutPopOver').get(0).props.open;
    const openMockFn = jest.fn(() => {
      wrapper.setState({
        open: true,
        anchorEl: {
          event: {
            currentTarget: 'defined'
          }
        }
      });
    });
    const closeMockFn = jest.fn(() => {
      wrapper.setState({ open: false });
    });
    it('should have an anchor element that is undefined when unclicked',
      () => {
        expect(wrapper.find('.signOutPopOver').get(0)
        .props.anchorEl).not.toBeDefined();
      });
    it('should open or close when clicked', () => {
    /**
     *  simulate a click event.
     */
      wrapper.find('.signOutPopOver').childAt(0)
      .simulate('click', openMockFn());

    /**
     * click event should change state.
     */
      expect(openMockFn).toHaveBeenCalled();
      expect(wrapper.find('.signOutPopOver').get(0)
      .props.open).not.toBe(initialState);
      expect(wrapper.find('.signOutPopOver').get(0)
      .props.children.props.onTouchTap).toBeDefined();
      expect(wrapper.find('.signOutPopOver').get(0)
      .props.onRequestClose).toBeDefined();
      expect(wrapper.find('.signOutPopOver').get(0)
      .props.anchorEl).toBeDefined();

    /**
     * simulate another click event.
     */
      wrapper.find('.signOutPopOver').childAt(0)
      .simulate('click', closeMockFn());

    /**
     * state should be updated again
     */
      expect(closeMockFn).toHaveBeenCalled();
      expect(wrapper.find('.signOutPopOver').get(0)
    .props.open).toBe(initialState);
    });
  });
});
