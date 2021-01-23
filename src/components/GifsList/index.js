import React from 'react';

import Gif from '../Gif';

import './GifsList.css';

const GifsList = ({ gifs }) => {
    return (
        <div className='gifsList'>
            {gifs.map(gif => (
                <Gif gif={gif} key={gif.id} />
            ))}
        </div>
    );
};

export default GifsList;
