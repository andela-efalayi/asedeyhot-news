import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';
import MainHeader from '../app/components/MainHeader';

injectTapEventPlugin();

const div = document.createElement('div');
const testHeader = (
  <MuiThemeProvider>
    <MainHeader />
  </MuiThemeProvider>
);
describe('MainHeader', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<testHeader />, div);
  });
  it('is a function ', () => {
    expect(typeof MainHeader).toEqual('function');
  });
});
