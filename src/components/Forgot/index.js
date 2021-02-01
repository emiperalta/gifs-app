import React, { useState } from 'react';

import Button from 'components/Button';

import '../LoginForm/LoginForm.css';

const Forgot = () => {
    const [email, setEmail] = useState('');

    const handleEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        // forgotPassword({ email });
    };

    return (
        <div className='login-form-div'>
            <p className='form-title'>Forgot password</p>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    onChange={handleEmail}
                    placeholder='Email'
                    type='email'
                    value={email}
                />

                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default Forgot;
