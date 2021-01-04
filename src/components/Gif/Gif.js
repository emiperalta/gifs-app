import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

const Gif = ({ gif: { id, title, url }, detail }) => {
    return detail ? (
        <div className='gifItemDetail'>
            <h5>{title}</h5>
            <img src={url} alt={title} />
        </div>
    ) : (
        <Link to={`/gif/${id}`}>
            <div className='gifItem'>
                <h5>{title}</h5>
                <img src={url} alt={title} />
            </div>
        </Link>
    );
};

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
