import React from 'react';
import { Link, useLocation } from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

const Header = () => {
    const { isLogged, logout, userLoggedIn } = useUser();
    const [path] = useLocation();

    return (
        <header className='header'>
            {isLogged ? (
                <>
                    <span>{userLoggedIn}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    {path !== '/login' && <Link to='/login'>Login</Link>}
                    {path !== '/register' && <Link to='/register'>Register</Link>}
                </>
            )}
        </header>
    );
};

export default Header;
