import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import useUser from 'hooks/useUser';

import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigateTo] = useLocation();
    const { isLogged, login, loginIsLoading, loginHasError } = useUser();

    useEffect(() => {
        if (isLogged) {
            navigateTo('/');
            onLogin && onLogin();
        }
    }, [isLogged, navigateTo, onLogin]);

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password });
    };

    const handleUsername = e => setUsername(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    return (
        <>
            {loginIsLoading ? (
                <Spinner />
            ) : (
                <div className='loginFormDiv'>
                    <p className='form-title'>Login to your account</p>
                    <form onSubmit={handleSubmit} className='loginForm'>
                        <input
                            onChange={handleUsername}
                            placeholder='Username'
                            type='text'
                            value={username}
                        />

                        <input
                            onChange={handlePassword}
                            placeholder='Password'
                            type='password'
                            value={password}
                        />
                        <Button>Login</Button>
                    </form>
                </div>
            )}
            {loginHasError && <h5 className='login-error'>Credentials are wrong</h5>}
        </>
    );
};

export default LoginForm;
