import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

import useUser from 'hooks/useUser';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigateTo] = useLocation();
    const { isLogged, login, loginIsLoading, loginHasError } = useUser();

    useEffect(() => {
        if (isLogged) navigateTo('/');
    }, [isLogged, navigateTo]);

    const submitHandler = e => {
        e.preventDefault();
        login({ username, password });
    };

    const usernameChangeHandler = e => setUsername(e.target.value);
    const passwordChangeHandler = e => setPassword(e.target.value);

    return (
        <>
            {loginIsLoading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <form onSubmit={submitHandler}>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={usernameChangeHandler}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <button>Login</button>
                    </form>
                </div>
            )}
            {loginHasError && <strong>Credentials are wrong</strong>}
        </>
    );
};

export default LoginForm;
