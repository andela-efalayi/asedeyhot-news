import React from 'react';
import { shallow, mount } from 'enzyme';
import FavouriteArticles from '../../../app/components/FavouriteArticles.jsx';
import * as mockValue from '../../../__mocks__/mockValues';

let emptyResponseFromFirebase;

describe('FavouriteArticles.jsx', () => {
  it('should match component snapshot',
    () => {
      const wrapper = shallow(
          <FavouriteArticles articles={mockValue.favouriteArticles}/>
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
