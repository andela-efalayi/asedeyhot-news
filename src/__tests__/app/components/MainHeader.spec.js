import React from 'react';
import { shallow } from 'enzyme';
import MainHeader from '../../../app/components/MainHeader.jsx';
import UserAvatar from '../../../app/components/UserAvatar.jsx';

const user = {
  name: 'Jest Tester',
  imageUrl: 'https://dummyimage.com/600x400/000000/0011ff'
};

const avatar = <UserAvatar user={user}/>;

describe('MainHeader Component', () => {
  it('should render an AppBar', () => {
    const wrapper = shallow(
        <MainHeader />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a user avatar', () => {
    const wrapper = shallow(
        <MainHeader userInfo={avatar}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
