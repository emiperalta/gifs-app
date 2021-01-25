import React from 'react';
import { Link } from 'wouter';

import Fav from 'components/Fav';

import { GifContainer } from './styles';

const Gif = ({ gif: { id, title, url }, size }) => {
    return (
        <>
            <GifContainer size={size}>
                <Fav id={id} />
                <Link to={`/gif/${id}`}>
                    <h5>{title}</h5>
                    <img loading='lazy' src={url} alt={title} />
                </Link>
            </GifContainer>
        </>
    );
};

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
