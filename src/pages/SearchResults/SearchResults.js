import React, { useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';

import LoadingImages from 'components/ContentLoader/LoadingImages';
import GifsList from 'components/GifsList/GifsList';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import './SearchResults.css';

const SearchResults = ({ params: { keyword } }) => {
    const externalRef = useRef();
    const { loading, gifs, setPage } = useGifs({ keyword });
    const { isNear } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    });

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
                <LoadingImages />
            ) : (
                <>
                    <h3 className='searchWord'>{decodeURI(keyword)}</h3>
                    <GifsList gifs={gifs} />

                    <div id='bait' ref={externalRef}></div>
                </>
            )}
        </>
    );
};

export default SearchResults;
