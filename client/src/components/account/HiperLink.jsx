import React from 'react';
import { Link } from 'react-router-dom';
import './HiperLink.scss';
const HiperLink = ({ adress, isAccount }) => {
    return (
        <p className='linkwrap'>
            <span>{isAccount ? '계정이 있으신가요?' : '계정이 없으신가요?'}</span>
            <Link to={adress}><span className='link'>{isAccount ? '로그인' : '가입하기'}</span></Link>
        </p>
    );
};

export default HiperLink;