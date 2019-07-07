import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { deletePost, id, title, image, deleted, hidden } = this.props;
    let classname_deleted = deleted? 'deleted' : '';
    return (
      <div onClick={deletePost} className={`${classname_deleted} post`} >
        <div>{title}</div>
        <img src={image}/>
      </div>
    );
  }
}

export default Post;
