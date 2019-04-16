import React from 'react';
import { Redirect } from 'react-router-dom';
import { Main } from 'routes'

const RootPage = () => {
    const isToken = localStorage.getItem('token')
    return (
        <div>
            {!isToken && <Redirect to='signin' from='/' />}
            <Main />
        </div>
    );
};

export default RootPage;