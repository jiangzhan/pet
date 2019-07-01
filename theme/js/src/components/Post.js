import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { deletePost, id, title, image, deleted } = this.props;
    return (
      <div onClick={deletePost} className="post" style={{display: deleted ? 'none': 'block'}}>
        <div>{title}</div>
        <img style={{width: '300px'}}src={image}/>
      </div>
    );
  }
}

export default Post;
