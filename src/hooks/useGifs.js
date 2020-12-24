import { useState, useEffect, useContext } from 'react';

import GifsContext from 'context/GifsContext';
import { getGifs } from 'services/api';

const useGifs = ({ keyword } = { keyword: null }) => {
    const { gifs, setGifs } = useContext(GifsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword');

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword, setGifs]);

    return {
        loading,
        gifs,
    };
};

export default useGifs;
