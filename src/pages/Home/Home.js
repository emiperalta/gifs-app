import React from 'react';
import { Helmet } from 'react-helmet';

import useGifs from 'hooks/useGifs';
import SearchForm from 'components/SearchForm/SearchForm';
import LoadingImages from 'components/ContentLoader/LoadingImages';
import GifsList from 'components/GifsList/GifsList';
import TrendingSearches from 'components/TrendingSearches/LazyTrending';
import './Home.css';

const Home = () => {
    const { loading, gifs } = useGifs();

    return (
        <>
            <Helmet>
                <title>Home | Giffes</title>
                <meta name='description' content='Gifs app' />
            </Helmet>

            <SearchForm />

            <h3 className='subtitle'>Last search</h3>
            {loading ? (
                <LoadingImages className='centeredLoadingGifs' />
            ) : (
                <GifsList gifs={gifs} />
            )}

            <TrendingSearches />
        </>
    );
};

export default Home;
