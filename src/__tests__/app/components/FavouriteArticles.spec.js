import React from 'react';
import { shallow, mount } from 'enzyme';
import FavouriteArticles from '../../../app/components/FavouriteArticles.jsx';

let emptyResponseFromFirebase;

const favouriteArticles = {
  title: {
    author: 'BBC News',
    description: 'The party says it would prioritise',
    url: 'http://www.bbc.co.uk/news/uk-politics-39698465'
  }
};

describe('FavouriteArticles.jsx', () => {
  it('should match component snapshot',
    () => {
      const wrapper = shallow(
          <FavouriteArticles articles={favouriteArticles}/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  it('should contain "You have no saved articles" for an empty response',
    () => {
      const wrapper = mount(
          <FavouriteArticles articles={emptyResponseFromFirebase}/>
      );
      expect(wrapper.containsMatchingElement(
        <p>You have no saved articles.</p>)
      ).toEqual(true);
    });
});
