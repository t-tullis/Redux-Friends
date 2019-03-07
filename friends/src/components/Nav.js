import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Nav = () => {
    return(
    <ul className='navigation'>
        <li>
          <Link to='/login'>Log in</Link>
        </li>
      </ul>
    )
}

export default Nav;