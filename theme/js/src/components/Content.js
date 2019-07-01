import React, { Component } from 'react';
import content from '../reducers/content';
import { connect } from 'react-redux';
import { getContent, deletePost } from '../actions';
import Post from './Post';

class Content extends Component {
  componentDidMount() {
    this.props.getContent();
  }
  render() {
    const contentItems = this.props.content.map((item, index) => (
      <Post key={index} 
        {...item}
        deletePost={() => this.props.deletePost(item.id)}
      />
    ));
    return (
      <div>
        <h1>Posts</h1>
        {contentItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.items
});

export default connect(mapStateToProps, { getContent, deletePost })(Content);
