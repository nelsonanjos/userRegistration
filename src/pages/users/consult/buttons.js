import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Buttons = () => {
    return(
        <div className="buttons">
            <Link to="/" className="button-return">Return</Link>
            <Link to={`Users/Add`} className="button-add">New User</Link>
        </div>
    )
};

export default Buttons;