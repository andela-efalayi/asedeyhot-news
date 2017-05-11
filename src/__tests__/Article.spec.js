import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';
import Article from '../app/components/Article';

injectTapEventPlugin();

const div = document.createElement('div');
const testArticle = (
  <MuiThemeProvider>
    <Article title="Article component test"
      image="https://dummyimage.com/600x400/c734c7/fff"
      description="testArticle has a decription"
      url="http://www.google.com"
    />
  </MuiThemeProvider>
);
describe('Article', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<testArticle />, div);
  });
  it('is a function ', () => {
    expect(typeof Article).toEqual('function');
  });
});
