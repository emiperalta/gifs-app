import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from 'components/Button';
import useUser from 'hooks/useUser';
import Spinner from 'components/ContentLoader/LoadingSubmit';
import { validateWithFormik } from 'utils/validation';

import './RegisterForm.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [registered, setRegistered] = useState(false);

    const { register, hasError } = useUser();

    const initialValues = {
        email: '',
        username: '',
        password: '',
    };

    return (
        <>
            {registered ? (
                <>
                    <h4 className='success-msg'>
                        You've been successfully registered!
                    </h4>
                    <p className='confirmation-msg'>
                        A confirmation email was sent to '
                        <strong style={{ color: 'coral' }}>{email}</strong>'
                    </p>
                </>
            ) : (
                <div className='register-form-div'>
                    <p className='form-title'>Create your account</p>
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
                        {({ errors, isSubmitting }) =>
                            isSubmitting ? (
                                <Spinner />
                            ) : (
                                <>
                                    <Form className='register-form'>
                                        <Field
                                            className={errors.email ? 'error' : ''}
                                            name='email'
                                            placeholder='Email'
                                            required={true}
                                            type='email'
                                        />
                                        <ErrorMessage
                                            className='input-error'
                                            component='small'
                                            name='email'
                                        />

                                        <Field
                                            className={
                                                errors.username ? 'error' : ''
                                            }
                                            name='username'
                                            placeholder='Username'
                                            required={true}
                                            type='text'
                                        />
                                        <ErrorMessage
                                            className='input-error'
                                            component='small'
                                            name='username'
                                        />

                                        <Field
                                            className={
                                                errors.password ? 'error' : ''
                                            }
                                            name='password'
                                            placeholder='Password'
                                            required={true}
                                            type='password'
                                        />
                                        <ErrorMessage
                                            className='input-error'
                                            name='password'
                                            component='small'
                                        />

                                        <Button type='submit'>Register</Button>
                                    </Form>
                                </>
                            )
                        }
                    </Formik>
                </div>
            )}
            {hasError && <h5>Username already in use!</h5>}
        </>
    );
};

export default RegisterForm;
