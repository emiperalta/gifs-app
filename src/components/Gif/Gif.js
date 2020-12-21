import React from 'react';

import './Gif.css';

const Gif = ({ gif: { title, url } }) => {
    return (
        <div className='gifItem'>
            <h5>{title}</h5>
            <img src={url} alt={title} />
        </div>
    );
};

export default Gif;
