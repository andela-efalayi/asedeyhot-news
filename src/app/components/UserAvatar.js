import React from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';


const avatarStyle = {
  right: 1
};

const UserAvatar = (props) => (
   <ListItem
    primaryText={props.userName}
    insetChildren={true}
    rightAvatar={<Avatar src={props.userImg}
    style={avatarStyle} />}
  />
);

export default UserAvatar;
