import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { deletePost, title, image, deleted } = this.props;
    let classname_deleted = deleted ? 'deleted' : '';
    return (
      <div onClick={deletePost} className={`${classname_deleted} post`} >
        <div>{title}</div>
        <img src={image}/>
      </div>
    );
  }
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  deleted: PropTypes.bool
}

export default Post;
