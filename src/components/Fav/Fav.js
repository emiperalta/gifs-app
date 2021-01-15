import React from 'react';
import { useLocation } from 'wouter';

import useUser from 'hooks/useUser';

import './Fav.css';

const Fav = ({ id }) => {
    const { isLogged, addFav, deleteFav, favs } = useUser();
    const [, navigateTo] = useLocation();

    const isFaved = favs.some(favId => favId === id);

    const favHandler = () => {
        if (isLogged) {
            isFaved ? deleteFav({ id }) : addFav({ id });
        } else navigateTo('/login');
    };

    return (
        <div className='gif-fav'>
            <button onClick={favHandler}>
                <svg
                    id='i-heart'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    fill='#fff'
                    stroke='#000'
                    className={isFaved ? 'faved' : 'not-faved'}
                >
                    <path d='M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z' />
                </svg>
            </button>
        </div>
    );
};

export default Fav;
