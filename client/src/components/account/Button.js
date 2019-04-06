import React from 'react';
import './Button.scss'
const Button = ({ value, type }) => {
    return (
        <div className='buttonwrap'>
            <button type={type}>{value}</button>
        </div>
    );
};

export default Button;