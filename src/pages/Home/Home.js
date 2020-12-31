import React, { useCallback } from 'react';
import { useLocation } from 'wouter';

import useGifs from 'hooks/useGifs';
import SearchForm from 'components/SearchForm/SearchForm';
import LoadingImages from 'components/ContentLoader/LoadingImages';
import GifsList from 'components/GifsList/GifsList';
import TrendingSearches from 'components/TrendingSearches/LazyTrending';
import './Home.css';

const Home = () => {
    const [path, pushTo] = useLocation();
    const { loading, gifs } = useGifs();

    const submitHandler = useCallback(
        ({ keyword }) => {
            keyword !== '' ? pushTo(`/search/${keyword}`) : pushTo(`/`);
        },
        [pushTo]
    );

    return (
        <>
            <SearchForm onSubmit={submitHandler} />

            <h3 className='subtitle'>Last search</h3>
            {loading ? (
                <LoadingImages className='centeredLoading' />
            ) : (
                <GifsList gifs={gifs} />
            )}

            <TrendingSearches />
        </>
    );
};

export default Home;
