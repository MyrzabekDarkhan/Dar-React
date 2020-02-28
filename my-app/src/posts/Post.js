import React from 'react';
import LikeContext from './LikeContext';

class Post extends React.Component {
    render() {
        return (
            <LikeContext.Consumer>
                {
                    onLikedClicked => (
<                   div className="Post__item">
                        <div className="Post__item-title">
                            { this.props.item.title }
                        </div>
                        <div className="Post__item-text">
                            { this.props.item.text }
                        </div>
                        <div className="Post__item-buttons">
                            <button 
                                className = {this.props.item.liked ? 'liked' : ''}
                                onClick= {() => 
                                    onLikedClicked(this.props.item.id)}>
                                { this.props.item.liked ? 'Liked' : 'Like!' }
                            </button>
                        </div>
                    </div>
                    )
                }
                
            </LikeContext.Consumer>
        )   
    }
}
export default Post;