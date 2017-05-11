import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';
import UserAvatar from '../app/components/UserAvatar';

injectTapEventPlugin();

const div = document.createElement('div');
const testUserAvatar = <UserAvatar />;

describe('UserAvatar', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<testUserAvatar />, div);
  });
  it('is a function ', () => {
    expect(typeof testUserAvatar).toEqual('object');
  });
});
