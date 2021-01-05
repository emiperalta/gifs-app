import React from 'react';

import Gif from 'components/Gif/Gif';
import useSingleGif from 'hooks/useSingleGif';

const Detail = ({ params }) => {
    const detail = true;

    const { id } = params;
    const { gif } = useSingleGif({ id });

    if (!gif) return null;

    return <Gif gif={gif} detail={detail} />;
};

export default Detail;
