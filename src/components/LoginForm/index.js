import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'wouter';

import Button from 'components/Button';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import useUser from 'hooks/useUser';

import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigateTo] = useLocation();
    const { isLogged, login, isLoading, hasError } = useUser();

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
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='login-form-div'>
                    <p className='form-title'>Login to your account</p>
                    <form onSubmit={handleSubmit} className='login-form'>
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
                        <div className='button-link'>
                            <Button>Login</Button>
                            <Link to='/forgot'>Forgot password?</Link>
                        </div>
                    </form>
                </div>
            )}
            {hasError && <h5 className='login-error'>Credentials are wrong</h5>}
        </>
    );
};

export default LoginForm;
