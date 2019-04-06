import React from 'react';
import './Input.scss'
const Input = ({ type, placeholder }) => {
    return (
        <div className='inputWrap'>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;