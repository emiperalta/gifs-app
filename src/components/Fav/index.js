import React, { useState } from 'react';

import useUser from 'hooks/useUser';

import Modal from 'components/Modal';
import LoginForm from 'components/LoginForm';

import './Fav.css';

const Fav = ({ id }) => {
    const [showModal, setShowModal] = useState(false);
    const { isLogged, addFav, deleteFav, favs } = useUser();

    const isFaved = favs.some(favId => favId === id);

    const favHandler = () => {
        if (isLogged) {
            isFaved ? deleteFav({ id }) : addFav({ id });
        } else return setShowModal(true);
    };

    const closeModalHandler = () => setShowModal(false);

    const loginHandler = () => setShowModal(false);

    return (
        <div className='gif-fav'>
            <button onClick={favHandler} className='favBtn'>
                <svg
                    id='i-heart'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    fill='#fff'
                    className={isFaved ? 'faved' : 'not-faved'}
                >
                    <path d='M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z' />
                </svg>
            </button>

            {showModal && (
                <Modal onClose={closeModalHandler}>
                    <h5 className='adv'>Login for add gifs to fav!</h5>
                    <LoginForm onLogin={loginHandler} />
                </Modal>
            )}
        </div>
    );
};

export default Fav;
