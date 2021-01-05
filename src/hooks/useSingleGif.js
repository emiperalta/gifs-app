import { useEffect, useState } from 'react';

import useGifs from './useGifs';
import { getSingleGif } from 'services/api';

const useSingleGif = ({ id }) => {
    const { gifs } = useGifs();
    const gifFromCache = gifs.find(gif => gif.id === id);

    const [gif, setGif] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        if (!gif) {
            setIsLoading(true);
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif);
                    setIsLoading(false);
                    setisError(false);
                })
                .catch(err => {
                    setIsLoading(false);
                    setisError(true);
                });
        }
    }, [gif, id]);

    return { gif, isLoading, isError };
};

export default useSingleGif;
