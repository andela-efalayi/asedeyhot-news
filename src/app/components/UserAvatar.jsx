import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

const avatarStyle = {
  right: 1
};

const UserAvatar = ({ user }) => {
  return (
    <ListItem
    primaryText={user.name}
    rightAvatar={<Avatar src={user.imageUrl}
    style={avatarStyle} />}
  />
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object
};
UserAvatar.defaultProps = {
  user: null
};

export default UserAvatar;
