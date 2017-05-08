import React, { Component } from 'react';
import InitialiseApp from '../actions/initialise';
import SourceStore from '../stores/sourceStore';
import MainHeader from '../components/MainHeader';
import UserAvatar from '../components/UserAvatar';
import AllSources from '../pages/AllSources';
import _ from 'lodash';

InitialiseApp.init();

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    SourceStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
  	let title = null;
  	if (this.props.allSources) {
  		title = 'News Sources';
  	}
  	this.setState({
    title
  });
  }

  componentWillUnmount() {
    SourceStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
  		sources: SourceStore.getSources()
    });
  }

  render() {
    let body = <AllSources sources={this.state.sources}/>;
    return (
		<div>
			<MainHeader
			userAvatar={<UserAvatar
			userName={localStorage.userName}
			userImg={localStorage.userImg}/>}/>
			{body}
		</div>
  );
  }
}

export default HomePage;
