import './Content.css';
import React from "react";
import {Routes, Route } from "react-router-dom";

import Home from '../../views/pages/Home'
import About from '../../views/pages/About'
import Login from '../../views/pages/Login'

 const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/login" element={<Login/>} />    
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    </main>
)

export default Content