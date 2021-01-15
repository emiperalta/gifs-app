import React from 'react';
import { Link } from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

const Header = () => {
    const { isLogged, logout, user } = useUser();

    return (
        <header className='header'>
            {isLogged ? (
                <>
                    <span>{user}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </header>
    );
};

export default Header;
