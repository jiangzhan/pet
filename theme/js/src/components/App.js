import React, { Component } from 'react';
import Content from './Content';
import Dropdown from './Dropdown';
import { getContent } from '../actions';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';


class App extends Component {
  render() {
    const currentLon = browserHistory.getCurrentLocation();
    const dropDowns = this.props.dropdowns.map((item) => (
      <Dropdown key={item.key}
        index={item.key}
        value={item.value}
      />
    ));
    return (
      <React.Fragment>
        <div>
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
