import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Landing from "./pages/Landing.js"
import Home from "./pages/Home.js"
import MyClasses from "./pages/MyClasses.js"
import Account from "./pages/Account.js"


let App = ()=> {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path= "/" element= {<Landing />}/>
     <Route path= "/home" element= {<Home />}/>
     <Route path= "/myclasses" element= {<MyClasses />}/>
     <Route path= "/account" element= {<Account />}/>
    </Routes>
    </>
    );
}

export default App;
