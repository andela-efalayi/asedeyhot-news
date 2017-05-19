import React from 'react';
import { shallow } from 'enzyme';
import UserAvatar from '../../../app/components/UserAvatar.jsx';

const user = {
  name: 'Username',
  imageUrl: 'https://dummyimage.com/600x400/000000/0011ff'
};

describe('the UserAvatar Component', () => {
  const wrapper = shallow(
        <UserAvatar user={user}/>
    );
  test('renders a name for the user', () => {
    expect(wrapper.prop('primaryText')).toEqual(user.name);
  });
  test('renders a ListItem as parent', () => {
    expect(wrapper.name()).toEqual('ListItem');
  });
  test('renders a tooltip', () => {
    expect(wrapper.prop('rightAvatar')
    .props.tooltip).toEqual('click to sign out');
  });
  test('renders a popover for user to sign out', () => {
    expect(wrapper.find('.signOutPopOver')).toHaveLength(1);
    expect(wrapper.find('.signOutPopOver').children).toHaveLength(1);
  });
  test('popover opens and closes when clicked', () => {
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

    // anchorEl should not be defined when popover is closed.
    expect(wrapper.find('.signOutPopOver').get(0).props.anchorEl)
    .not.toBeDefined();

    // simulate a click event.
    wrapper.find('.signOutPopOver').childAt(0).simulate('click', openMockFn());

    // click event should change state.
    expect(openMockFn).toHaveBeenCalled();
    expect(wrapper.find('.signOutPopOver').get(0).props.open)
    .not.toBe(initialState);
    expect(wrapper.find('.signOutPopOver').get(0).props
    .children.props.onTouchTap).toBeDefined();
    expect(wrapper.find('.signOutPopOver').get(0).props.onRequestClose)
    .toBeDefined();
    expect(wrapper.find('.signOutPopOver').get(0).props.anchorEl).toBeDefined();

    // simulate another click event.
    wrapper.find('.signOutPopOver').childAt(0).simulate('click', closeMockFn());

    // state should be updated again
    expect(closeMockFn).toHaveBeenCalled();
    expect(wrapper.find('.signOutPopOver').get(0)
    .props.open).toBe(initialState);
  });
});
