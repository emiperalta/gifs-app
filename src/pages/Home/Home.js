import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

import GifsList from '../../components/GifsList/GifsList';
import useGifs from '../../hooks/useGifs';
import './Home.css';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path, pushTo] = useLocation();
    const { loading, gifs } = useGifs();

    const inputChangeHandler = e => setKeyword(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        keyword !== ''
            ? pushTo(`/search/${keyword}`)
            : console.log('empty input search');
    };

    return (
        <>
            <form onSubmit={submitHandler} className='searchForm'>
                <input
                    type='text'
                    placeholder='Santa Claus'
                    value={keyword}
                    onChange={inputChangeHandler}
                />
                <button>Search</button>
            </form>

            <Link to='/search/panda'>panda gifs</Link>
            <Link to='/search/monkey'>monkeys gifs</Link>
            <Link to='/search/racoon'>racoon gifs</Link>
            <Link to='/search/christmas'>christmas gifs</Link>

            <h3 className='subtitle'>Last search</h3>
            <GifsList gifs={gifs} />
        </>
    );
};

export default Home;
