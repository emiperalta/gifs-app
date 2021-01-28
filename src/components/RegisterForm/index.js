import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import useUser from 'hooks/useUser';
import { validateWithFormik } from 'utils/validation';

import './RegisterForm.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [registered, setRegistered] = useState(false);
    const [, navigateTo] = useLocation();

    const { register, registerHasError } = useUser();

    if (registered) {
        setTimeout(() => navigateTo('/login'), 4000);
    }

    const initialValues = {
        email: '',
        username: '',
        password: '',
    };

    return (
        <>
            {registered ? (
                <>
                    <h4>You've been successfully registered!</h4>
                    <p>
                        An email was sent to <strong>{email}</strong>
                    </p>
                </>
            ) : (
                <div className='registerFormDiv'>
                    <Formik
                        initialValues={initialValues}
                        validate={validateWithFormik}
                        onSubmit={(values, { setErrors }) => {
                            return register(values)
                                .then(res => {
                                    if (res) {
                                        setRegistered(true);
                                        setEmail(values.email);
                                    } else setRegistered(false);
                                })
                                .catch(err => setErrors(err));
                        }}
                    >
                        {({ errors, isSubmitting }) => (
                            <Form className='registerForm'>
                                <label htmlFor='email'>Insert email</label>
                                <Field
                                    id='email'
                                    className={errors.email ? 'error' : ''}
                                    name='email'
                                    placeholder='Insert email'
                                    required={true}
                                    type='email'
                                />
                                <ErrorMessage
                                    className='input-error'
                                    component='small'
                                    name='email'
                                />

                                <label htmlFor='username'>Insert a username</label>
                                <Field
                                    id='username'
                                    className={errors.username ? 'error' : ''}
                                    name='username'
                                    placeholder='Insert username'
                                    required={true}
                                    type='text'
                                />
                                <ErrorMessage
                                    className='input-error'
                                    component='small'
                                    name='username'
                                />

                                <label htmlFor='password'>Insert a password</label>
                                <Field
                                    id='password'
                                    className={errors.password ? 'error' : ''}
                                    name='password'
                                    placeholder='Insert password'
                                    required={true}
                                    type='password'
                                />
                                <ErrorMessage
                                    className='input-error'
                                    name='password'
                                    component='small'
                                />

                                <Button type='button' disabled={isSubmitting}>
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
