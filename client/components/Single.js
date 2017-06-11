import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{

  render(){
    const {postId} = this.props.params;
    const i = this.props.posts.findIndex((post)=> post.code===postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return(
        <div className="single-photo">
        <Photo key={i} i={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
        </div>
    );
  }
}

export default Single;
