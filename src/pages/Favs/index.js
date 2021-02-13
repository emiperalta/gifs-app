import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'wouter';

import useFavedGifs from 'hooks/useFavedGifs';
import GifsList from 'components/GifsList';
import LoadingImages from 'components/ContentLoader/LoadingImages';

import '../Home/Home.css';

const Favs = () => {
    const { gifs, isLogged, isLoading, hasError } = useFavedGifs();
    const [, navigateTo] = useLocation();

    return (
        <div className='home'>
            <Helmet>
                <title>Favs | Giffes</title>
                <meta name='description' content='My faved gifs' />
            </Helmet>

            <h1 className='subtitle'>My favs</h1>
            {isLogged ? (
                isLoading ? (
                    <LoadingImages className='centeredLoadingGifs' />
                ) : gifs.length > 0 ? (
                    <>
                        <GifsList gifs={gifs} />
                    </>
                ) : (
                    <p className='warning-message'>
                        No results found. Start adding some gifs to fav!
                    </p>
                )
            ) : (
                <p className='warning-message'>
                    You have to <Link to='/login'>login</Link> to see your favs :(
                </p>
            )}
            {hasError && navigateTo('/404')}
        </div>
    );
};

export default Favs;
