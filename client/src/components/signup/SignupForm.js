import React, { useState } from 'react';
import './SignupForm.scss'
import { LetterIcon, AppDown, HiperLink } from '../account';

const SignupForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='content'>
            <div className='content-box'>
                <LetterIcon />
                <h2 className='content-form-title'>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                <form className='content-form' onSubmit={handleSubmit}>
                    <input className='content-form-input' type='text' placeholder='성명' />
                    <input className='content-form-input' type='text' placeholder='사용자 이름' />
                    <input className='content-form-input' type='password' placeholder='비밀번호' />
                    <button className='content-form-button' type='submit'>가입</button>
                </form>
                <p className='content-form-policy'>
                    가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.
                </p>
            </div>
            <div className='content-box'>
                <HiperLink adress='/signin' isAccount={true} />
            </div>
            <AppDown />
        </div>
    );
};

export default SignupForm;