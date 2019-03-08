import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
const Nav = () => {
    return(
    <ul className='navigation'>
        <li>
          <NavLink to='/login'>Log in</NavLink>
        </li>
        <li>
          <NavLink to='/add-friend'>Add Friend</NavLink>
        </li>
      </ul>
    )
}

export default Nav;