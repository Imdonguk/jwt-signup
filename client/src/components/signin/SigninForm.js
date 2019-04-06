import React from 'react';
import './SigninForm.scss';
import { LetterIcon, Input, Button, AppDown, HiperLink } from '../account';
const SigninForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='content'>
            <div className='content-box'>
                <LetterIcon />
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='사용자이름' />
                    <Input type='password' placeholder='패스워드' />
                    <Button type='submit' value='로그인' />
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