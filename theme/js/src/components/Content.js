import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import Post from './Post';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    const contentItems = this.props.content.map((item, index) => (
      <Post 
        key={index} 
        {...item}
        deletePost={() => this.props.deletePost(item.id)}
      />
    ));
    return (
      <div className='flex'>
        {contentItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.items
});

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    deleted: PropTypes.bool  
  }).isRequired).isRequired,
  deletePost: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { deletePost })(Content);

