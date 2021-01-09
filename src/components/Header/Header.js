import React from 'react';
import { Link } from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

const Header = () => {
    const { isLogged, logout } = useUser();

    return (
        <header className='header'>
            {isLogged ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </header>
    );
};

export default Header;
