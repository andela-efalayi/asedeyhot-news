/* global localStorage window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';

import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';

const avatarStyle = {
  marginTop: '-15px'
};

const styles = {
  signoutPopOverMenu: {
    marginTop: '-15px',
    marginBottom: '0px',
    right: '0px',
    fontSize: '13px'
  }
};

class UserAvatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  signOutUser = () => {
    localStorage.clear();
    window.location = '/';
  }
  render() {
    return (
      <ListItem
      primaryText={this.props.user.name}
      insetChildren
      hoverColor="none"
      rightAvatar={
        <IconButton
          tooltip="click to sign out"
          tooltipPosition="top-center"
          disableTouchRipple
          iconStyle={avatarStyle}
          onTouchTap={this.handleTouchTap}
          onClick={this.handleTouchTap}>
          <Avatar src={this.props.user.imageUrl}/>
        </IconButton>
      }>
      <Popover
          className="signOutPopOver"
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          animation={PopoverAnimationVertical}
          onRequestClose={this.handleRequestClose}
        >
          <Menu maxHeight={28} desktop={false}
          onTouchTap={this.signOutUser}
          onClick={this.signOutUser}>
            <MenuItem primaryText="Sign out"
            style={styles.signoutPopOverMenu}
            rightIcon={<PowerSettingsNew />}
            value="signout" />
          </Menu>
        </Popover>
    </ListItem>
    );
  }
}

UserAvatar.propTypes = {
  user: PropTypes.object
};
UserAvatar.defaultProps = {
  user: null
};

export default UserAvatar;
