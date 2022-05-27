import React from "react";
import './Buttons.css'

const Buttons = props => (
    <div>
        <button type={props.type} className="btn">{props.title}</button>
    </div>
)

export default Buttons