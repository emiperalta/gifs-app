import { useEffect, useContext, useState } from 'react';

import GifsContext from 'context/GifsContext';
import UserContext from 'context/UserContext';

import { getFavedGifsByIDs } from 'services/giphyApi';

const useFavedGifs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const { favs } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);

        getFavedGifsByIDs(favs)
            .then(gifs => {
                console.log(gifs);
                setGifs(gifs);
                setIsError(false);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setIsError(true);
            });
    }, [setGifs, favs]);

    return {
        gifs,
        isLoading,
        isError,
    };
};

export default useFavedGifs;
