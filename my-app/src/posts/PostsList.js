import React from 'react'
import Post from './Post';
import './PostsList.css'
class PostsList extends React.Component{

    render() {
        return (
            <div className="PostsList__list">
                { 
                    this.props.items.map(post => 
                        <Post 
                            key = {post.id} 
                            item={ post } 
                            onLikedClicked={this.props.onLikedClicked} 
                        />)
                }
            </div>
        );
    }
}
export default PostsList;
