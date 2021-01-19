import React from 'react';
import { Helmet } from 'react-helmet';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import RegisterFormWithFormik from 'components/RegisterForm/RegisterFormWithFormik';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register | Giffes</title>
                <meta name='description' content='User signup' />
            </Helmet>

            <RegisterFormWithFormik />
        </>
    );
};

export default Register;
