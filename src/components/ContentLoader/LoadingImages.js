import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingImages = props => (
    <ContentLoader
        speed={2}
        viewBox='0 0 400 160'
        height={160}
        width={400}
        backgroundColor='#3d3d57'
        foregroundColor='#7c82a2'
        {...props}
    >
        <circle cx='150' cy='86' r='8' />
        <circle cx='194' cy='86' r='8' />
        <circle cx='238' cy='86' r='8' />
    </ContentLoader>
);

export default LoadingImages;
