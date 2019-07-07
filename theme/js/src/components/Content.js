import React, { Component } from 'react';
import content from '../reducers/content';
import { connect } from 'react-redux';
import { getContent, deletePost } from '../actions';
import Post from './Post';

class Content extends Component {
  render() {
    const contentItems = this.props.content.map((item, index) => (
      <Post key={index} 
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

export default connect(mapStateToProps, { deletePost })(Content);

