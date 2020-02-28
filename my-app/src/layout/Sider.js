import React from 'react';
import './Sider.css'
import UserProfile from '../user/UserProfile';

export default function Slider({children}) {
    return (
        <aside className='Sider'>
            <UserProfile ></UserProfile>
            {children}
        </aside>
    )
}
