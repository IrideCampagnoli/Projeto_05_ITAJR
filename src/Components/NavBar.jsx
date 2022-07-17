import React from "react";  
import './NavBar.css'

import { Link } from 'react-router-dom'


export default () => 
  <nav className="Nav">
    <a className="site">Site</a>
    <ul className="lista">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>Sobre Nós</Link>
      </li>
      <li>
        <Link to='login'>Login</Link>
      </li>
    </ul>
  </nav>