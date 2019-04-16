import React from 'react';
import { Signup } from 'components/signup'

const SignupPage = ({ history }) => {
    return (
        <div>
            <div>
                <Signup history={history} />
            </div>
        </div>
    );
};

export default SignupPage;