import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <article className='footer'>
            <div className='footer-inner'>
                <nav className='footer-inner-link'>
                    <ul>
                        <li><span className='link'>instagram 정보</span></li>
                        <li><span className='link'>지원</span></li>
                        <li><span className='link'>홍보 센터</span></li>
                        <li><span className='link'>API</span></li>
                        <li><span className='link'>채용 정보</span></li>
                        <li><span className='link'>개인정보처리방침</span></li>
                        <li><span className='link'>약관</span></li>
                        <li><span className='link'>디렉터리</span></li>
                        <li><span className='link'>프로필</span></li>
                        <li><span className='link'>해시태그</span></li>
                        <li><span className='link'>언어</span></li>
                    </ul>
                </nav>
                <span>© 2019 Instagram</span>
            </div>
        </article>
    );
};

export default Footer;