import React from 'react';
import { Helmet } from 'react-helmet';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register | Giffes</title>
                <meta name='description' content='User signup' />
            </Helmet>

            <RegisterForm />
        </>
    );
};

export default Register;
