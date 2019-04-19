import React from 'react';
import './AppDown.scss'
const AppDown = () => {
    return (
        <div className='download'>
            <p>앱을 다운로드하세요.</p>
            <div className='app'>
                <a href='https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo'>
                    <img
                        src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png'
                        alt='download apple app'
                    />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DW2g8NgAEAAH6Rs-vxib9xZKDIR8h%26utm_content%3Dlo%26utm_medium%3Dbadge'>
                    <img
                        src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png'
                        alt='download google app'
                    />
                </a>
            </div>
        </div>
    );
};

export default AppDown;