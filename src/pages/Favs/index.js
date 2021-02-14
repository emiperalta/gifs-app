import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';

import useFavedGifs from 'hooks/useFavedGifs';
import GifsList from 'components/GifsList';
import NoResults from 'components/NoResults';
import NotAllowed from 'components/NotAllowed';
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

            {isLogged ? (
                isLoading ? (
                    <>
                        <h1 className='subtitle'>My favs</h1>
                        <LoadingImages className='centeredLoadingGifs' />
                    </>
                ) : gifs.length > 0 ? (
                    <>
                        <h1 className='subtitle'>My favs</h1>
                        <GifsList gifs={gifs} />
                    </>
                ) : (
                    <NoResults />
                )
            ) : (
                <NotAllowed />
            )}
            {hasError && navigateTo('/404')}
        </div>
    );
};

export default Favs;
