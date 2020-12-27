import React, { useState } from 'react';
import { useLocation } from 'wouter';

import TrendingSearches from 'components/TrendingSearches/LazyTrending';
import LoadingImages from 'components/ContentLoader/LoadingImages';
import GifsList from 'components/GifsList/GifsList';
import useGifs from 'hooks/useGifs';
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

            <h3 className='subtitle'>Last search</h3>
            {loading ? <LoadingImages /> : <GifsList gifs={gifs} />}

            <TrendingSearches />
        </>
    );
};

export default Home;
