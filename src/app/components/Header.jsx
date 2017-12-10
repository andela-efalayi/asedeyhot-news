import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

/**
 *  @class Header
 * @summary Displays page header
 * @extends {Component}
 */
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'home',
    };
    this.changeTab = this.changeTab.bind(this);
  }

/**
 * @param {String} value - Tab value
 * @return {void} state
 */
  handleChange = (value) => {
    this.setState({
      value,
    });
  };

/**
 * @summary Handles Tab change
 * @param {any} tab - Selected tab
 */
  changeTab(tab) {
    window.location = tab.props['data-route'];
  }

  /**
   * @summary Handles tab display on header component
   * @return {JSX} React node
   */
  renderNavigationTabs() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab
          label="Home"
          value="home"
          data-route="/"
          onActive={this.changeTab}
        />
        <Tab
          label="General"
          value="general"
          data-route="#/category/general"
          onActive={this.changeTab}
        />
        <Tab
          label="Business"
          value="business"
          data-route="#/category/business"
          onActive={this.changeTab}
        />

        <Tab
          label="Sports"
          value="sports"
          data-route="#/category/sport"
          onActive={this.changeTab}
        />
        {/* <Tab
          label="Entertainment"
          value="entertainment"
          data-route="#/category/entertainment"
          onActive={this.changeTab}
          /> */}
        {/* <Tab
          label="Music"
          value="business"
          data-route="#/category/music"
          onActive={this.changeTab}
          /> */}

        {/* <Tab
          label="Politics"
          value="politics"
          data-route="#/category/politics"
          onActive={this.changeTab}
        /> */}

        {/* <Tab
          label="Health"
          value="health"
          data-route="#/category/health"
          onActive={this.changeTab}
        /> */}
        {/* <Tab
          label="Science"
          value="science"
          data-route="#/category/science-and-nature"
          onActive={this.changeTab}
        /> */}

        <Tab
          label="Tech"
          value="technology"
          data-route="#/category/technology"
          onActive={this.changeTab}
        />
        {/* <Tab
          label="Gaming"
          value="gaming"
          data-route="#/category/gaming"
          onActive={this.changeTab}
        /> */}

        <Tab
          label="More"
          value="more"
        />
      </Tabs>
    );
  }

  render() {
    return (
      <div className="header">
        <div className="site-name">
          <h2>Asedeyhot!</h2>
        </div>
        <div className="home-tabs">
          {this.renderNavigationTabs()}
        </div>
      </div>
    );
  }
}

export default Header;
