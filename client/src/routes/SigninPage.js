import React from 'react';
import { Signin } from 'components/signin'

const SigninPage = ({ history }) => {
    return (
        <div>
            <Signin history={history} />
        </div>
    );
};

export default SigninPage;