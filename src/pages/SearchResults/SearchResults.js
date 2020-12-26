import React from 'react';

import LoadingImages from 'components/ContentLoader/LoadingImages';
import GifsList from 'components/GifsList/GifsList';
import useGifs from 'hooks/useGifs';
import './SearchResults.css';

const SearchResults = ({ params: { keyword } }) => {
    const { loading, gifs, setPage } = useGifs({ keyword });

    const nextPageHandler = () => setPage(prevPage => prevPage + 1);

    return (
        <>
            {loading ? (
                <LoadingImages />
            ) : (
                <>
                    <h3 className='searchWord'>{decodeURI(keyword)}</h3>
                    <GifsList gifs={gifs} />
                    <button className='nextPage' onClick={nextPageHandler}>
                        ➜
                    </button>
                </>
            )}
        </>
    );
};

export default SearchResults;
