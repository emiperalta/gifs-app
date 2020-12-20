import React, { useState, useEffect } from 'react';

import Gif from './Gif';
import { getGifs } from '../services/api';

const GifsList = ({ params: { keyword } }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs));
    }, [keyword]);

    return (
        <>
            {gifs.map(gif => (
                <Gif gif={gif} key={gif.id} />
            ))}
        </>
    );
};

export default GifsList;
