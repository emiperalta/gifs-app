import React, { useState } from 'react';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import useUser from 'hooks/useUser';

import '../LoginForm/LoginForm.css';

const Reset = ({ token }) => {
    const [password, setPassword] = useState('');
    const [, navigateTo] = useLocation();
    const { resetPassword, isLoading, hasError } = useUser();

    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        resetPassword({ token, password }).then(res =>
            res ? navigateTo('/login') : null
        );
    };

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='login-form-div'>
                    <p className='form-title'>Reset password</p>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <input
                            onChange={handlePassword}
                            placeholder='Password'
                            type='password'
                            value={password}
                        />

                        <Button>Submit</Button>
                    </form>
                </div>
            )}
            {hasError && <h5 className='login-error'>Credentials are wrong</h5>}
        </>
    );
};

export default Reset;
