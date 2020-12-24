import React from 'react';

import GifsList from 'components/GifsList/GifsList';
import useGifs from 'hooks/useGifs';

const SearchResults = ({ params: { keyword } }) => {
    const { loading, gifs } = useGifs({ keyword });

    return (
        <>
            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <div>
                    <h3>{decodeURI(keyword)}</h3>
                    <GifsList gifs={gifs} />
                </div>
            )}
        </>
    );
};

export default SearchResults;
