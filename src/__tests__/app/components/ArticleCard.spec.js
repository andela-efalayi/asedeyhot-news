import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../../../app/components/ArticleCard.jsx';

const articleWithTitle = {
  author: 'BBC News',
  title: 'US submarine arrives in South Korea',
  description: 'It comes amid worries of a North Korean missile',
  url: 'http://www.bbc.co.uk/news/world-asia-39701481',
  urlToImage: 'http://image-url/image.jpg',
  publishedAt: '2017-04-25T02:59:53+00:00'
};
const articleWithNoDescription = {
  author: 'BBC News',
  title: 'US submarine arrives in South Korea',
  description: null,
  url: 'http://www.bbc.co.uk/news/world-asia-39701481',
  urlToImage: 'http://image-url/image.jpg',
  publishedAt: '2017-04-25T02:59:53+00:00'
};

describe('ArticleCard.jsx', () => {
  const wrapper1 = shallow(
    <ArticleCard article={articleWithTitle}/>
  );
  const wrapper2 = shallow(
    <ArticleCard article={articleWithNoDescription}/>
  );
  describe('component', () => {
    it('should match snapshots', () => {
      expect(wrapper1).toMatchSnapshot();
      expect(wrapper2).toMatchSnapshot();
    });
  });

  describe('.card-description', () => {
    it('should have truncated text for long description', () => {
      expect(wrapper1.find('.card-description').node
      .props.children[0].length).toEqual(50);
    });
    it('should show "No text available" if description is null', () => {
      expect(wrapper2.find('.card-description').node
      .props.children[0]).toEqual('No text available');
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
