import React, { useState, useEffect } from 'react';

import GifsList from '../../components/GifsList/GifsList';
import { getGifs } from '../../services/api';

const SearchResults = ({ params: { keyword } }) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    return <>{loading ? <h4>Loading...</h4> : <GifsList gifs={gifs} />}</>;
};

export default SearchResults;
