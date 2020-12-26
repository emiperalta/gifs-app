import React, { Suspense } from 'react';

import useNearScreen from 'hooks/useNearScreen';
import Loading from 'components/ContentLoader/Loading';
const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

const LazyTrending = () => {
    const { isNear, elementRef } = useNearScreen();

    return (
        <div ref={elementRef}>
            <Suspense fallback={<Loading />}>
                {isNear ? <TrendingSearches /> : <Loading />}
            </Suspense>
        </div>
    );
};

export default LazyTrending;
