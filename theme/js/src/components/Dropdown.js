import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDropdown } from '../actions';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  render() {
    return (
      <select onChange={() => this.props.changeDropdown(event, this.props.index)} value={this.props.value}>
        <option value="0">Select</option>
        <option value="1">Dog</option>
        <option value="2">Cat</option>
        <option value="3">Bird</option>
      </select>
    );
  }
}

Dropdown.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  changeDropdown: PropTypes.func.isRequired
}

export default connect(null, { changeDropdown })(Dropdown);
