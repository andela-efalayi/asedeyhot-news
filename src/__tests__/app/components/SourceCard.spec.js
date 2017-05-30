import React from 'react';
import { shallow } from 'enzyme';
import SourceCard from '../../../app/components/SourceCard.jsx';

const sourceWithLongDescription = {
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  category: 'general',
  description: 'News, analysis from the Middle East and worldwide,' +
    'multimedia and interactives, opinions, documentaries, podcasts,' +
    'long reads and broadcast schedule.',
  url: 'http://www.aljazeera.com',
  sortBysAvailable: ['top', 'latest']
};
const sourceWithShortDescription = {
  id: 'al-jazeera-english',
  name: 'Al Jazeera English',
  category: 'general',
  description: 'News, analysis from the Middle East',
  url: 'http://www.aljazeera.com',
  sortBysAvailable: ['top', 'latest']
};

describe('SourceCard.jsx', () => {
  const wrapper = shallow(
    <SourceCard source={sourceWithLongDescription}/>
  );
  const anotherWrapper = shallow(
    <SourceCard source={sourceWithShortDescription}/>
  );

  describe('Component with long source description', () => {
    it('should be truncated to 123 characters', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.card-description').childAt(0).node.length)
      .toEqual(123);
    });
  });

  describe('Component with short source description should not be truncated',
  () => {
    it('should match a SourceCard component snapshot', () => {
      expect(anotherWrapper).toMatchSnapshot();
      expect(anotherWrapper.find('.card-description').childAt(0).node.length)
      .toEqual(sourceWithShortDescription.description.length);
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
