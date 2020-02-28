import React from 'react';
import { connect } from 'react-redux';


function UserProfile({user}) {
    return user ?(
    
        <ul>
            <li>First name: { user.firstName }</li>
            <li>Last name: { user.lastName }</li>
        </ul>
       
    ) : null;
}
const mapStateToProps = state => ({
    user: state.user.userData
})
export default connect(mapStateToProps) (UserProfile);