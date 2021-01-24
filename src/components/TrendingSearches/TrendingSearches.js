import React, { useState, useEffect } from 'react';

import { getTrendingTerms } from 'services/giphyApi';

import { Trending, TrendItem } from './styles';

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms().then(trendingGifs => setTrends(trendingGifs));
    }, []);

    return (
        <Trending>
            {trends.map((trend, index) => (
                <TrendItem to={`/search/${trend}`} key={trend} index={index}>
                    {trend}
                </TrendItem>
            ))}
        </Trending>
    );
};

export default TrendingSearches;
