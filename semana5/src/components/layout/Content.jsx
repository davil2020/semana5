import './Content.css';
import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from '../../views/pages/Home'
import About from '../../views/pages/About'
import Login from '../../views/pages/Login'

 const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route exact path="/" element={<Login/>} />    
        </Routes>
    </main>
)

export default Content