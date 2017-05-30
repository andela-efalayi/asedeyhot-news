import React from 'react';
import { shallow, mount } from 'enzyme';
import FavouriteArticles from '../../../app/components/FavouriteArticles.jsx';

const favouriteArticles = {
  title: {
    author: 'BBC News',
    description: 'The party says it would prioritise',
    url: 'http://www.bbc.co.uk/news/uk-politics-39698465'
  }
};

const emptyResponseFromFirebase = null;

describe('FavouriteArticles.jsx', () => {
  it('should match FavouritesArticles component snapshot',
  () => {
    const wrapper = shallow(
        <FavouriteArticles articles={favouriteArticles}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should contain "You have no saved articles" for a null response',
  () => {
    const wrapper = mount(
        <FavouriteArticles articles={emptyResponseFromFirebase}/>
    );
    expect(wrapper.containsMatchingElement(
      <h4>You have no saved articles.</h4>)
    ).toEqual(true);
  });
});
