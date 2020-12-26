import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

const Gif = ({ gif: { id, title, url } }) => {
    return (
        <Link to={`/gif/${id}`}>
            <div className='gifItem'>
                <h5>{title}</h5>
                <img src={url} alt={title} />
            </div>
        </Link>
    );
};

export default Gif;
