import React from 'react';
import { Link } from 'wouter';

import Fav from 'components/Fav/Fav';

import './Gif.css';

const Gif = ({ gif: { id, title, url }, detail }) => {
    return (
        <>
            <div className={detail ? 'gifItemDetail' : 'gifItem'}>
                <Fav id={id} />
                <Link to={`/gif/${id}`}>
                    <h5>{title}</h5>
                    <img src={url} alt={title} />
                </Link>
            </div>
        </>
    );
};

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
