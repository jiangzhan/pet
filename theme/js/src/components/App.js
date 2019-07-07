import React, { Component } from 'react';
import Content from './Content';
import Dropdown from './Dropdown';
import { getContent } from '../actions';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

class App extends Component {
  componentDidMount() {
   const currentLon = browserHistory.getCurrentLocation();
    var query = currentLon.query;
    this.props.getContent(query);
  }
  componentWillUpdate() {
    const currentLon = browserHistory.getCurrentLocation();
    var query = currentLon.query;
    this.props.getContent(query);
  }
  render() {
    const dropDowns = this.props.dropdowns.map((item) => (
      <Dropdown key={item.key}
        index={item.key}
        value={item.value}
      />
    ));
    return (
      <React.Fragment>
        <div>
          <div>Thank you for your consideration. Here is <a href="https://github.com/jiangzhan/pet" target="_blank">Github Repository</a>.</div>
          {dropDowns}
        </div>
        <Content />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dropdowns: state.content.filters
});

export default connect(mapStateToProps, { getContent})(App);
