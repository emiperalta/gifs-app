import React from 'react';
import { Helmet } from 'react-helmet';

import Forgot from 'components/Forgot';

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Forgot Password | Giffes</title>
            </Helmet>

            <Forgot />
        </>
    );
};

export default ForgotPassword;
