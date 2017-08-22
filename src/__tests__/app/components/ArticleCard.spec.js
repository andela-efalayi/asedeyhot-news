import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../../../app/components/ArticleCard.jsx';
import * as mockValue from '../../../__mocks__/mockValues';

describe('ArticleCard.jsx', () => {
  const wrapper1 = shallow(
    <ArticleCard article={mockValue.articleWithDescription}/>
  );
  const wrapper2 = shallow(
    <ArticleCard article={mockValue.articleWithNoDescription}/>
  );
  describe('component', () => {
    it('should match snapshots', () => {
      expect(wrapper1).toMatchSnapshot();
      expect(wrapper2).toMatchSnapshot();
    });
  });

  describe('.card-description', () => {
    it('should have truncated text for long description', () => {
      expect(wrapper1.find('.card-description')
      .node.props.children[0].length).toEqual(50);
      expect(wrapper1.find('.card-description')
      .node.props.children[0].length)
      .not.toEqual(mockValue.articleWithDescription.description.length);
    });
    it('should show "No text available" if description is null', () => {
      expect(wrapper2.find('.card-description')
      .node.props.children[0]).toEqual('No text available');
    });
  });

  describe('.card-actions', () => {
    it('should trigger an onClick event when an icon is clicked', () => {
      wrapper1.find('.card-actions').childAt(0).simulate('click');
      expect(wrapper1.find('.card-actions').childAt(0)
      .node.props.onClick).toBeDefined();
    });
  });
});
