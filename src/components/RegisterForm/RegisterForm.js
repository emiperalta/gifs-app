import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import useUser from 'hooks/useUser';
import { validate } from 'utils/validation';

import './RegisterForm.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [touched, setTouched] = useState(false);
    const [errors, setErrors] = useState({});

    const [, navigateTo] = useLocation();

    const { isLogged, register, registerIsLoading, registerHasError } = useUser();

    useEffect(() => {
        if (isLogged) return navigateTo('/');
    }, [isLogged, navigateTo]);

    const usernameChangeHandler = e => {
        setUsername(e.target.value);
        setTouched(true);
    };
    const passwordChangeHandler = e => {
        setPassword(e.target.value);
        setTouched(true);
    };

    const handleBlur = e => {
        const { name, value } = e.target;

        const { [name]: removedError, ...rest } = errors;

        const error = validate[name](value);

        setErrors({
            ...rest,
            ...(error && { [name]: touched[name] && error }),
        });
    };

    const submitHandler = e => {
        e.preventDefault();

        const formValidation = Object.keys({ username, password }).reduce(
            (acc, key) => {
                const newError = validate[key]({ username, password }[key]);
                const newTouched = { [key]: true };
                return {
                    errors: {
                        ...acc.errors,
                        ...(newError && { [key]: newError }),
                    },
                    touched: {
                        ...acc.touched,
                        ...newTouched,
                    },
                };
            },
            {
                errors: { ...errors },
                touched: { ...touched },
            }
        );

        setErrors(formValidation.errors);
        setTouched(formValidation.touched);

        if (
            !Object.values(formValidation.errors).length &&
            Object.values(formValidation.touched).length ===
                Object.values({ username, password }).length &&
            Object.values(formValidation.touched).every(t => t === true)
        ) {
            register({ username, password });
        }
    };

    return (
        <>
            {registerIsLoading ? (
                <Spinner />
            ) : (
                <div className='register-form-div'>
                    <form
                        onSubmit={submitHandler}
                        autoComplete='off'
                        className='register-form'
                    >
                        <label htmlFor='username'>Insert a username</label>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Enter username'
                            className={
                                touched.username && errors.username ? 'error' : ''
                            }
                            value={username}
                            onChange={usernameChangeHandler}
                            onBlur={handleBlur}
                        />
                        {touched.username && (
                            <span className='input-error'>{errors.username}</span>
                        )}

                        <label htmlFor='password'>Insert a password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            className={
                                touched.password && errors.password ? 'error' : ''
                            }
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={handleBlur}
                        />
                        {touched.password && (
                            <span className='input-error'>{errors.password}</span>
                        )}

                        <Button>Register</Button>
                    </form>
                </div>
            )}
            {registerHasError && <h5>Username or password are incorrect.</h5>}
        </>
    );
};

export default RegisterForm;
