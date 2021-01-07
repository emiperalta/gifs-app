import React, { useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

import LoadingImages from 'components/ContentLoader/LoadingImages';
import SearchForm from 'components/SearchForm/SearchForm';
import GifsList from 'components/GifsList/GifsList';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import './SearchResults.css';

const SearchResults = ({ params: { keyword, rating } }) => {
    const externalRef = useRef();
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const { isNear } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    });

    const title = gifs ? `${gifs.length} results of ${decodeURI(keyword)}` : '';

    const nextPageHandler = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1), 200),
        [setPage]
    );

    useEffect(() => {
        if (isNear) nextPageHandler();
    }, [isNear, nextPageHandler]);

    return (
        <>
            {loading ? (
                <>
                    <Helmet>
                        <title>Loading gifs...</title>
                        <meta name='description' content='Loading gifs' />
                    </Helmet>
                    <LoadingImages className='centeredLoadingGifs' />
                </>
            ) : (
                <>
                    <Helmet>
                        <title>{title} | Giffes</title>
                        <meta name='description' content={title} />
                    </Helmet>

                    <SearchForm initKeyword={keyword} initRating={rating} />

                    <h3 className='searchWord'>{decodeURI(keyword)}</h3>
                    <GifsList gifs={gifs} />

                    <div id='bait' ref={externalRef}></div>
                </>
            )}
        </>
    );
};

export default SearchResults;
