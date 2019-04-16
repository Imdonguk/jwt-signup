import React, { useState } from 'react';
import './SigninForm.scss';
import { LetterIcon, AppDown, HiperLink } from '../account';
const SigninForm = ({ history }) => {

    const [account, setAccount] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

    const handleChange = ({ target }) => {
        setAccount({
            ...account,
            [target.name]: target.value
        })
    }
    return (
        <div className='content'>
            <div className='content-box'>
                <LetterIcon />
                <form className='content-form' onSubmit={handleSubmit}>
                    <input
                        className='content-form-input'
                        type='text'
                        name='userName'
                        placeholder='사용자이름'
                        onChange={handleChange}
                    />
                    <input
                        className='content-form-input'
                        type='password'
                        name='password'
                        placeholder='패스워드'
                        onChange={handleChange}
                    />
                    <button className='content-form-button' type='submit'>로그인</button>
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