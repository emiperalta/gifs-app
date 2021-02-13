import { useEffect, useContext, useState } from 'react';

import GifsContext from 'context/GifsContext';
import UserContext from 'context/UserContext';
import useUser from './useUser';

import { getFavedGifsByIDs } from 'services/giphyApi';

const useFavedGifs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const { favs } = useContext(UserContext);
    const { isLogged } = useUser();

    useEffect(() => {
        setIsLoading(true);

        getFavedGifsByIDs(favs)
            .then(gifs => {
                setGifs(gifs);
                setHasError(false);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setHasError(true);
            });
    }, [setGifs, favs]);

    return {
        gifs,
        isLoading,
        hasError,
        isLogged,
    };
};

export default useFavedGifs;
