import React from 'react';
import './AppDown.scss'
const AppDown = () => {
    return (
        <div className='download'>
            <p>앱을 다운로드하세요.</p>
            <div className='app'>
                <a href='#'>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png' />
                </a>
                <a href='#'>
                    <img src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png' />
                </a>
            </div>
        </div>
    );
};

export default AppDown;