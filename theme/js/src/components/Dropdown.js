import React, { Component } from 'react';
import content from '../reducers/content';
import { connect } from 'react-redux';
import { changeDropdown } from '../actions';
/*
const Post = ({ onClick, id, image, title}) => (
  <div onClick={onClick}>
    <span>{id}</span>
    <span>{title}</span>
    <img src={image}/>
  </div>
);*/
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
export default connect(null, { changeDropdown })(Dropdown);
