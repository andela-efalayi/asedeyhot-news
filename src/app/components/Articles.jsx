import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GetArticles from '../actions/GetArticles';
import ArticlesStore from '../stores/ArticlesStore';
// import SortBar from './SortBar.jsx';
import ArticleCard from './ArticleCard.jsx';

/**
 * @class Articles
 * @extends {Component}
 * @method onArticlesChange
 * @method updateArticles
 * @method componentDidMount
 * @method componentWillUnmount
 * @param {object} props
 */

class Articles extends Component {
  constructor(props) {
    super(props);
    const currentSource = JSON.parse(localStorage.getItem('currentSource'));
    const sourceId = props.match.params.id;
    this.state = {
      currentSource,
      sourceId,
      currentSortOption: '',
      articles: [],
    };
    this.onArticlesChange = this.onArticlesChange.bind(this);
    this.updateArticles = this.updateArticles.bind(this);
  }

  /**
   * @memberof Articles
   * @method componentDidMount
   * @return {void}
   */
  componentDidMount() {
    const sortOption = '';
    GetArticles(this.state.sourceId, sortOption);
    ArticlesStore.addChangeListener(this.onArticlesChange);
  }

  /**
   * @method componentWillUnmount
   * @memberof Articles
   * @return {void}
   */
  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onArticlesChange);
  }

  /**
   * Sets state when ArticlesStore emits a change
   * @memberof Articles
   * @method onArticlesChange
   * @return {void}
   */
  onArticlesChange() {
    this.setState({
      articles: ArticlesStore.loadArticles()
    });
  }

  /**
   * Updates state when user indicates a sort parameter
   * @memberof Articles
   * @method updateArticles
   * @param {object} event
   * @param {number} index
   * @param {string} value
   * @return {void}
   */
  updateArticles(event, index, value) {
    GetArticles(this.state.sourceId, value);
    this.setState({
      currentSortOption: value,
      articles: ArticlesStore.loadArticles()
    });
  }
  render() {
    const articles = this.state.articles;
    // const currentSource = 'some name';
    return (
       <div>
        {/* <SortBar title={currentSource.name}
        sortOptions={currentSource.sortOptions}
        currentSortOption={this.state.currentSortOption}
        updateArticles={this.updateArticles}/> */}
         <div className="container body">
          <div className="row">
            {articles.map(article => (
              <div className="col-sm-6 col-md-4" key={article.url}>
                <ArticleCard article={article}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  match: PropTypes.object
};

export default Articles;
