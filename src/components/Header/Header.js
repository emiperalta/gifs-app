import React from 'react';
import { Link } from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

const Header = () => {
    const { isLogged, logout, userLoggedIn } = useUser();

    return (
        <header className='header'>
            {isLogged ? (
                <>
                    <span>{userLoggedIn}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}
        </header>
    );
};

export default Header;
