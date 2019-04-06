import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <article className='footer'>
            <div className='footer-inner'>
                <nav className='footer-inner-link'>
                    <ul>
                        <li><a href='#'>instagram 정보</a></li>
                        <li><a href='#'>지원</a></li>
                        <li><a href='#'>홍보 센터</a></li>
                        <li><a href='#'>API</a></li>
                        <li><a href='#'>채용 정보</a></li>
                        <li><a href='#'>개인정보처리방침</a></li>
                        <li><a href='#'>약관</a></li>
                        <li><a href='#'>디렉터리</a></li>
                        <li><a href='#'>프로필</a></li>
                        <li><a href='#'>해시태그</a></li>
                        <li><a href='#'>언어</a></li>
                    </ul>
                </nav>
                <span>© 2019 Instagram</span>
            </div>
        </article>
    );
};

export default Footer;