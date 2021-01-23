import React from 'react';
import { Helmet } from 'react-helmet';

import RegisterFormWithFormik from 'components/RegisterForm';

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
