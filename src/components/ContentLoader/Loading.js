import React from 'react';
import ContentLoader from 'react-content-loader';

const Loading = props => (
    <ContentLoader
        speed={2}
        width={600}
        height={84}
        viewBox='0 0 600 84'
        backgroundColor='#3d3d57'
        foregroundColor='#7c82a2'
        {...props}
    >
        <rect x='82' y='10' rx='3' ry='3' width='67' height='11' />
        <rect x='463' y='9' rx='3' ry='3' width='72' height='11' />
        <rect x='177' y='10' rx='3' ry='3' width='67' height='11' />
        <rect x='274' y='10' rx='3' ry='3' width='67' height='11' />
        <rect x='224' y='41' rx='3' ry='3' width='67' height='11' />
        <rect x='374' y='10' rx='3' ry='3' width='67' height='11' />
        <rect x='318' y='41' rx='3' ry='3' width='67' height='11' />
        <rect x='364' y='92' rx='3' ry='3' width='67' height='9' />
        <rect x='408' y='42' rx='3' ry='3' width='67' height='11' />
        <rect x='138' y='41' rx='3' ry='3' width='67' height='11' />
        <rect x='497' y='42' rx='3' ry='3' width='67' height='11' />
        <rect x='53' y='42' rx='3' ry='3' width='67' height='11' />
        <rect x='168' y='66' rx='3' ry='3' width='67' height='11' />
        <rect x='372' y='67' rx='3' ry='3' width='67' height='11' />
        <rect x='267' y='67' rx='3' ry='3' width='67' height='11' />
    </ContentLoader>
);

export default Loading;
