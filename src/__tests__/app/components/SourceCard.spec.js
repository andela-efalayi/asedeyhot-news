import React from 'react';
import { shallow } from 'enzyme';
import SourceCard from '../../../app/components/SourceCard.jsx';
import * as mockValue from '../../../__mocks__/mockValues';

describe('SourceCard.jsx', () => {
  const wrapper = shallow(
    <SourceCard source={mockValue.sourceWithLongDescription}/>
  );
  const anotherWrapper = shallow(
    <SourceCard source={mockValue.sourceWithShortDescription}/>
  );

  describe('Component', () => {
    it('should match match snaphots', () => {
      expect(wrapper).toMatchSnapshot();
      expect(anotherWrapper).toMatchSnapshot();
    });
  });

  describe('Component with long source description', () => {
    it('should have a description truncated to 123 characters', () => {
      expect(wrapper.find('.card-description').childAt(0).node.length)
      .toEqual(123);
    });
  });

  describe('Component with short source description', () => {
    it('should not be truncated', () => {
      expect(anotherWrapper.find('.card-description').childAt(0).node.length)
      .toEqual(mockValue.sourceWithShortDescription.description.length);
    });
  });

  describe('.card-actions', () => {
    it('should trigger an onClick event when an icon is clicked', () => {
      wrapper.find('.source-actions').childAt(0).simulate('click');
      expect(wrapper.find('.source-actions').childAt(0)
      .node.props.onClick).toBeDefined();

      wrapper.find('.source-actions').childAt(1).simulate('click');
      expect(wrapper.find('.source-actions').childAt(1)
      .node.props.onClick).toBeDefined();
    });
  });
});
