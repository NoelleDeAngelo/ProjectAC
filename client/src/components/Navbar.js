import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(){
  return <nav className= "nav">
     <Link className= "site-name" to= '/'>ProjectAC</Link>
    <ul>
      <Link to= '/home'>Home</Link>
      <Link to= '/myclasses'>MyClasses</Link>
      <Link to= '/Account'>Account</Link>
    </ul>
  </nav>
}