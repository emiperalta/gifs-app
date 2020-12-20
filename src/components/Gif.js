import React from 'react';

const Gif = ({ gif: { title, url } }) => {
    return (
        <div>
            <h5>{title}</h5>
            <img src={url} alt={title} />
        </div>
    );
};

export default Gif;
