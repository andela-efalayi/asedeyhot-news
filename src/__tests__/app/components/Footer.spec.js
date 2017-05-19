import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../app/components/Footer.jsx';

describe('Footer Component', () => {
  it('should render a footer', () => {
    const wrapper = shallow(
        <Footer />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a className', () => {
    const wrapper = shallow(
        <Footer className="container-fluid" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
