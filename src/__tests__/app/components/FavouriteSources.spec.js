import React from 'react';
import { shallow, mount } from 'enzyme';
import FavouriteSources from '../../../app/components/FavouriteSources.jsx';
import * as mockValue from '../../../__mocks__/mockValues';

let emptyResponseFromFirebase;

describe('FavouriteSources.jsx', () => {
  it('should match FavouriteSources component snapshot', () => {
    const wrapper = shallow(
        <FavouriteSources sources={mockValue.favouriteSources}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should return "You have no saved sources" for a null response', () => {
    const wrapper = mount(
        <FavouriteSources sources={emptyResponseFromFirebase}/>
    );
    expect(wrapper.containsMatchingElement(
      <p>You have no saved sources.</p>)
    ).toEqual(true);
  });
});
