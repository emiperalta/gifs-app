import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import useUser from 'hooks/useUser';

import './RegisterForm.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigateTo] = useLocation();

    const { isLogged, register, registerIsLoading, registerHasError } = useUser();

    useEffect(() => {
        if (isLogged) return navigateTo('/');
    }, [isLogged, navigateTo]);

    const submitHandler = e => {
        e.preventDefault();
        register({ username, password });
    };

    const usernameChangeHandler = e => setUsername(e.target.value);
    const passwordChangeHandler = e => setPassword(e.target.value);

    return (
        <>
            {registerIsLoading ? (
                <h5>Loading...</h5>
            ) : (
                <div className='registerFormDiv'>
                    <form onSubmit={submitHandler} className='registerForm'>
                        <label htmlFor='username'>Insert a username</label>
                        <input
                            id='username'
                            type='text'
                            placeholder='Insert username'
                            value={username}
                            onChange={usernameChangeHandler}
                        />

                        <label htmlFor='password'>Insert a password</label>
                        <input
                            id='password'
                            type='password'
                            placeholder='Insert password'
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <button className='registerBtn'>Register</button>
                    </form>
                </div>
            )}
            {registerHasError && <h5>Username or password are incorrect.</h5>}
        </>
    );
};

export default RegisterForm;
