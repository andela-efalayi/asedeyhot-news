import React from 'react';
import { shallow } from 'enzyme';
import HeadlineCard from '../../../app/components/HeadlineCard.jsx';

const demo = {
  title: 'Testing headline card',
  urlToImage: 'https://dummyimage.com/600x400/000000/0011ff',
  description: 'some description',
  url: 'http://www.aljazeera.com',
};

describe('HeadlineCard Component', () => {
  it('should render a HeadlineCard for a headline/article', () => {
    const wrapper = shallow(
        <HeadlineCard headline={demo}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
