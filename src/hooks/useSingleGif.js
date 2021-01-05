import { useEffect, useState } from 'react';

import useGifs from './useGifs';
import { getSingleGif } from 'services/api';

const useSingleGif = ({ id }) => {
    const { gifs } = useGifs();
    const gifFromCache = gifs.find(gif => gif.id === id);

    const [gif, setGif] = useState(gifFromCache);

    useEffect(() => {
        if (!gif) {
            getSingleGif({ id }).then(gif => setGif(gif));
        }
    }, [gif, id]);

    return { gif };
};

export default useSingleGif;
