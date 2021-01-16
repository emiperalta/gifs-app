import React from 'react';
import { Helmet } from 'react-helmet';

import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | Giffes</title>
                <meta name='description' content='User login' />
            </Helmet>

            <LoginForm />
        </>
    );
};

export default Login;
