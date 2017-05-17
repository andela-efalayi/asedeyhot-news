import React from 'react';
import { shallow } from 'enzyme';
import UserAvatar from '../../../app/components/UserAvatar.jsx';

const user = {
  name: 'Jest Tester',
  imageUrl: 'https://dummyimage.com/600x400/000000/0011ff'
};

describe('UserAvatar Component', () => {
  it('should render an avatar for a user', () => {
    const wrapper = shallow(
        <UserAvatar user={user}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
