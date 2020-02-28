import React from 'react';
import UserContext from './UserContext';

export default function withUser(ComponentToWrap) {
    

    return function(props) {
        return (
            <UserContext.Consumer>
                {   user => (
                    <ComponentToWrap user={user} {...props}>

                    </ComponentToWrap>
                )}
            </UserContext.Consumer>
        )
    }

}