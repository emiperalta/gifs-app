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
                <span
                    aria-label='fav gif'
                    role='img'
                    className={isFaved ? 'faved' : 'not-faved'}
                >
                    ❤
                </span>
            </button>
        </div>
    );
};

export default Fav;
