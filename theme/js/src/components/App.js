import React, { Component } from 'react';
import Content from './Content';
import Dropdown from './Dropdown';
import Search from './Search';
import { getContent } from '../actions';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';

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
      <Dropdown 
        key={item.key}
        index={item.key}
        value={item.value}
      />
    ));
    return (
      <React.Fragment>
        <div>
          <div>Thank you for your consideration. Here is <a href="https://github.com/jiangzhan/pet" target="_blank">Github Repository</a>.</div>
          {dropDowns}
          <Search />
        </div>
        <Content />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dropdowns: state.filters.dropdowns
});

App.propTypes = {
  dropdowns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }).isRequired).isRequired,
  getContent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getContent})(App);
