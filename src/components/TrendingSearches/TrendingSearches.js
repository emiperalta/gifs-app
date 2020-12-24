import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

import { getTrendingTerms } from 'services/api';
import './TrendingSearches.css';

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms().then(trendingGifs => setTrends(trendingGifs));
    }, []);

    return (
        <div className='trending'>
            {trends.map(trend => (
                <Link to={`/search/${trend}`} className='trendItem'>
                    {trend}
                </Link>
            ))}
        </div>
    );
};

export default TrendingSearches;
