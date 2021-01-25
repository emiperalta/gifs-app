import React from 'react';

import Gif from 'components/Gif';

import { GifsList } from './styles';

const GifsListComponent = ({ gifs }) => {
    return (
        <GifsList>
            {gifs.map(gif => (
                <Gif gif={gif} key={gif.id} />
            ))}
        </GifsList>
    );
};

export default GifsListComponent;
