import React from 'react';
import './SigninForm.scss';
import { LetterIcon, AppDown, HiperLink } from '../account';
const SigninForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='content'>
            <div className='content-box'>
                <LetterIcon />
                <form className='content-form' onSubmit={handleSubmit}>
                    <input className='content-form-input' type='text' placeholder='사용자이름' />
                    <input className='content-form-input' type='password' placeholder='패스워드' />
                    <button className='content-form-button' type='submit' value='로그인'>로그인</button>
                </form>
            </div>
            <div className='content-box'>
                <HiperLink adress='/signup' isAccount={false} />
            </div>
            <AppDown />
        </div>
    );
};

export default SigninForm;