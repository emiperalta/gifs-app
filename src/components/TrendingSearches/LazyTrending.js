import React, { Suspense } from 'react';

import useNearScreen from 'hooks/useNearScreen';
import LoadingTrends from 'components/ContentLoader/LoadingTrends';
const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

const LazyTrending = () => {
    const { isNear, elementRef } = useNearScreen();

    return (
        <div ref={elementRef}>
            <Suspense fallback={<LoadingTrends />}>
                {isNear ? <TrendingSearches /> : <LoadingTrends />}
            </Suspense>
        </div>
    );
};

export default LazyTrending;
