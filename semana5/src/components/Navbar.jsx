import React from "react";
import './Navbar.css'

import { Link } from "react-router-dom";

 const Navbar = props => (
    <aside className="Navbar">
        <h1 className="logo">
                <span className="text-primary"> <i className="fa-solid fa-jet-fighter"></i> ITA</span>JÚNIOR
        </h1>
        <nav>
           <ul>
               <li>
                    <Link to='/login'>Login</Link>
               </li>
               <li>
                    <Link to='/about'>Sobre Nós</Link>
               </li>
               <li>
                    <Link to='/'>Home</Link>
               </li>
           </ul>
        </nav>
    </aside>
)

export default Navbar