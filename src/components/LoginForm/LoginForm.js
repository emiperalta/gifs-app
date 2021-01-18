import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

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

    const submitHandler = e => {
        e.preventDefault();
        login({ username, password });
    };

    const usernameChangeHandler = e => setUsername(e.target.value);
    const passwordChangeHandler = e => setPassword(e.target.value);

    return (
        <>
            {loginIsLoading ? (
                <h5>Loading...</h5>
            ) : (
                <div className='loginFormDiv'>
                    <form onSubmit={submitHandler} className='loginForm'>
                        <label htmlFor='username'>Username</label>
                        <input
                            id='username'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={usernameChangeHandler}
                        />

                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <button className='loginBtn'>Login</button>
                    </form>
                </div>
            )}
            {loginHasError && <h5>Credentials are wrong</h5>}
        </>
    );
};

export default LoginForm;
