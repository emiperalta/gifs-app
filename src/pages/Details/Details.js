import React, { useContext } from 'react';

import GifsContext from 'context/GifsContext';
import Gif from 'components/Gif/Gif';

const Detail = ({ params }) => {
    const { gifs } = useContext(GifsContext);
    const detail = true;

    const gif = gifs.find(gif => gif.id === params.id);

    return <Gif gif={gif} detail={detail} />;
};

export default Detail;
