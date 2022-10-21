import React from 'react'
import {Link} from "react-router-dom"
import NameLogo from "../assets/NameLogo.png"

export default function Navbar(){
  return <nav className= "nav">
     <Link className= "site-name" to= '/'><img src={NameLogo}></img></Link>
    <ul>
      <Link className="page-link" to= '/home'>Home</Link>
      <Link className="page-link" to= '/myclasses'>MyClasses</Link>
      <Link className="page-link" to= '/Account'>Account</Link>
    </ul>
  </nav>
}