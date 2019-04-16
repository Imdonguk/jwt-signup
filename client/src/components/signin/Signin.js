import React from 'react';
import '../account/Account.scss';
import SigninForm from './SigninForm';
import Footer from '../Footer';
const Signin = ({ history }) => {
    return (
        <div className='container'>
            <main className='main'>
                <div className='main-contents'>
                    <SigninForm history={history} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signin;