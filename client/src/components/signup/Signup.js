import React from 'react';
import '../account/Account.scss';
import SignupForm from './SignupForm'
import Footer from '../Footer'

const Signup = () => {

    return (
        <div className='container'>
            <main className='main'>
                <div className='main-contents'>
                    <SignupForm />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Signup;