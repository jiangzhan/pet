import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../actions';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <span>Search: </span>
        <input type="text" className="text" value={this.props.value} onChange={this.props.updateSearch} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.filters.search.value
});

Search.propTypes = {
  value: PropTypes.string,
  updateSearch: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{updateSearch})(Search);
