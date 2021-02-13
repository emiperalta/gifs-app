import React from 'react';
import { Helmet } from 'react-helmet';

import useFavedGifs from 'hooks/useFavedGifs';
import GifsList from 'components/GifsList';

import '../Home/Home.css';

const Favs = () => {
    const { gifs } = useFavedGifs();

    // TODO: fix error when page refresh
    // TODO: add loading and error state

    return (
        <div className='home'>
            <Helmet>
                <title>Favs | Giffes</title>
                <meta name='description' content='My faved gifs' />
            </Helmet>

            <h1 className='subtitle'>My favs</h1>
            <GifsList gifs={gifs} />
        </div>
    );
};

export default Favs;
