import React from 'react';
import {connect } from 'react-redux'
function UserAvatar({user}) {
    return user ? (
       
        <div className= "UserAvatar" >
            Hello, { user.firstName } { user.lastName }
        </div>
        
    ): null;
}
const mapStateToProps = state => ({
    user: state.user.userData
})
export default connect(mapStateToProps) (UserAvatar);