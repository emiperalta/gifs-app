import React, { useState } from 'react';

import Button from 'components/Button';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import useUser from 'hooks/useUser';

import '../LoginForm/LoginForm.css';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const { forgotPassword, isLoading, hasError } = useUser();

    const handleEmail = e => setEmail(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        forgotPassword({ email }).then(res => {
            if (res) {
                setEmailSent(true);
            } else setEmailSent(false);
        });
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : emailSent ? (
                <>
                    <h4 className='success-msg'>Success!</h4>
                    <p className='confirmation-msg'>
                        An email for password reset was sent to '
                        <strong style={{ color: 'coral' }}>{email}</strong>'
                    </p>
                </>
            ) : (
                <div className='login-form-div'>
                    <p className='form-title'>Forgot password</p>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <input
                            onChange={handleEmail}
                            placeholder='Email'
                            type='email'
                            value={email}
                        />

                        <Button>Submit</Button>
                    </form>
                </div>
            )}
            {hasError && <h5 className='login-error'>Credentials are wrong</h5>}
        </>
    );
};

export default Forgot;
