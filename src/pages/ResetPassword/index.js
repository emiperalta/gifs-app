import React from 'react';
import { Helmet } from 'react-helmet';

import Reset from 'components/Reset';

const ResetPassword = ({ params }) => {
    const { token } = params;

    return (
        <>
            <Helmet>
                <title>Reset Password | Giffes</title>
            </Helmet>

            <Reset token={token} />
        </>
    );
};

export default ResetPassword;
