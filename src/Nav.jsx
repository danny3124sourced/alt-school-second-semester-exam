import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";
const Nav = ({repo}) => {
  return (

    <nav>
        <div className="logo">
            <img src={repo && repo[0]?.owner?.avatar_url} alt="" />
        </div>
    
        <ul>
            <li><Link to="/repo">repo</Link></li>
            <li><Link to="/error">error</Link></li>
        </ul>
    </nav>
  )
}

export default Nav