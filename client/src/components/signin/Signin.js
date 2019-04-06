import React from 'react';
import '../account/Account.scss';
import SigninForm from './SigninForm';
import Footer from '../Footer';
const Signin = () => {
    return (
        <section>
            <main className='main'>
                <div className='main-contents'>
                    <SigninForm />
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default Signin;