import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import useUser from 'hooks/useUser';
import { validateWithFormik } from 'utils/validation';

import './RegisterForm.css';

const RegisterForm = () => {
    const [registered, setRegistered] = useState(false);
    const [, navigateTo] = useLocation();

    const { register, registerHasError } = useUser();

    if (registered) {
        setTimeout(() => navigateTo('/login'), 4000);
    }

    console.log(`Successfully registered? ${registered}`);
    console.log(`Register has error: ${registerHasError}`);

    return (
        <>
            {registered ? (
                <>
                    <h4>You've been successfully registered!</h4>
                    <p>Redirecting to Login page...</p>
                </>
            ) : (
                <div className='registerFormDiv'>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validate={validateWithFormik}
                        onSubmit={(values, { setErrors }) => {
                            return register(values)
                                .then(res =>
                                    res ? setRegistered(true) : setRegistered(false)
                                )
                                .catch(err => setErrors(err));
                        }}
                    >
                        {({ errors, isSubmitting }) => (
                            <Form className='registerForm'>
                                <label htmlFor='username'>Insert a username</label>
                                <Field
                                    id='username'
                                    name='username'
                                    type='text'
                                    placeholder='Insert username'
                                    className={errors.username ? 'error' : ''}
                                />
                                <ErrorMessage
                                    className='input-error'
                                    name='username'
                                    component='small'
                                />

                                <label htmlFor='password'>Insert a password</label>
                                <Field
                                    id='password'
                                    name='password'
                                    type='password'
                                    placeholder='Insert password'
                                    className={errors.password ? 'error' : ''}
                                />
                                <ErrorMessage
                                    className='input-error'
                                    name='password'
                                    component='small'
                                />

                                <Button type='submit' disabled={isSubmitting}>
                                    Register
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
            {registerHasError && <h5>Username already in use!</h5>}
        </>
    );
};

export default RegisterForm;
