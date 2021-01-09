import { useState, useEffect, useContext } from 'react';

import GifsContext from 'context/GifsContext';

import { getGifs } from 'services/giphyApi';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword, rating, lang } = { keyword: null }) => {
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword');

    // effect for get gifs
    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating, lang }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword);
        });
    }, [keyword, keywordToUse, setGifs, rating, lang]);

    // effect for pagination
    useEffect(() => {
        if (page === INITIAL_PAGE) return;

        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, page, rating, lang }).then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs));
            setLoadingNextPage(false);
        });
    }, [keywordToUse, page, setGifs, rating, lang]);

    return {
        loading,
        loadingNextPage,
        gifs,
        setPage,
    };
};

export default useGifs;
