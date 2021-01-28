import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import useUser from 'hooks/useUser';

import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
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

    const submitHandler = e => {
        e.preventDefault();
        login({ username, password });
    };

    const handleEmail = e => setEmail(e.target.value);
    const handleUsername = e => setUsername(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    return (
        <>
            {loginIsLoading ? (
                <h5>Loading...</h5>
            ) : (
                <div className='loginFormDiv'>
                    <form onSubmit={submitHandler} className='loginForm'>
                        <label htmlFor='email'>Username</label>
                        <input
                            id='email'
                            onChange={handleEmail}
                            placeholder='Email'
                            type='email'
                            value={email}
                        />

                        <label htmlFor='username'>Username</label>
                        <input
                            id='username'
                            onChange={handleUsername}
                            placeholder='Username'
                            type='text'
                            value={username}
                        />

                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            onChange={handlePassword}
                            placeholder='Password'
                            type='password'
                            value={password}
                        />
                        <Button>Login</Button>
                    </form>
                </div>
            )}
            {loginHasError && <h5>Credentials are wrong</h5>}
        </>
    );
};

export default LoginForm;
