import './App.css'
import React from "react";

import { BrowserRouter } from  'react-router-dom'

import Navbar from "../components/Navbar";
import Content from '../components/layout/Content';

const App = props => (
    <body>
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Content/>
            </BrowserRouter>
        </div>
    </body>
)

export default App