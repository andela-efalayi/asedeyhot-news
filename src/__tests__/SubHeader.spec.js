import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';
import SubHeader from '../app/components/MainHeader';

injectTapEventPlugin();

const div = document.createElement('div');
const testHeader = (
  <MuiThemeProvider>
    <SubHeader />
  </MuiThemeProvider>
);
describe('SubHeader', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<subHeader />, div);
  });
  it('is a function ', () => {
    expect(typeof SubHeader).toEqual('function');
  });
});
