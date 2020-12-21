import React, { useState, useEffect } from 'react';

import Gif from '../Gif/Gif';
import { getGifs } from '../../services/api';
import './GifsList.css';

const GifsList = ({ params: { keyword } }) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <h4>Loading...</h4>;

    return (
        <div className='gifsList'>
            {gifs.map(gif => (
                <Gif gif={gif} key={gif.id} />
            ))}
        </div>
    );
};

export default GifsList;
