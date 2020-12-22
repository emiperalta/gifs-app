import { useState, useEffect } from 'react';

import { getGifs } from '../services/api';

const useGifs = ({ keyword } = { keyword: null }) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword');

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword]);

    return {
        loading,
        gifs,
    };
};

export default useGifs;
