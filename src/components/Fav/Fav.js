import React from 'react';
import { useLocation } from 'wouter';

import useUser from 'hooks/useUser';

import './Fav.css';

const Fav = ({ id }) => {
    const { isLogged } = useUser();
    const [, navigateTo] = useLocation();

    const favHandler = () => {
        isLogged ? alert(id) : navigateTo('/login');
    };

    return (
        <div className='gif-fav'>
            <button onClick={favHandler}>
                <span aria-label='fav gif' role='img'>
                    ❤
                </span>
            </button>
        </div>
    );
};

export default Fav;
