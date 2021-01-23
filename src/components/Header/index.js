import React from 'react';
import { Link, useLocation } from 'wouter';

import useUser from 'hooks/useUser';

import './Header.css';

const Header = () => {
    const { isLogged, logout, userLoggedIn } = useUser();
    const [path] = useLocation();

    return (
        <header className='header'>
            <section className='header-title'>
                <span>
                    <Link to='/'>GIFFES</Link>
                </span>
            </section>
            <section className='header-links'>
                {isLogged ? (
                    <>
                        <span>{userLoggedIn}</span>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        {path !== '/login' && <Link to='/login'>Login</Link>}
                        {path !== '/register' && (
                            <Link to='/register'>Register</Link>
                        )}
                    </>
                )}
            </section>
        </header>
    );
};

export default Header;
