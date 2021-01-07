import React, { useState } from 'react';
import { useLocation } from 'wouter';

import './SearchForm.css';

const RATING = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initKeyword = '', initRating }) => {
    const [keyword, setKeyword] = useState(decodeURI(initKeyword));
    const [rating, setRating] = useState(initRating);
    const [path, pushTo] = useLocation();

    const inputChangeHandler = e => setKeyword(e.target.value);

    const ratingChangeHandler = e => setRating(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        keyword === '' ? pushTo('/') : pushTo(`/search/${keyword}/${rating}`);
    };

    return (
        <form onSubmit={submitHandler} className='searchForm'>
            <input
                type='text'
                placeholder='Search any gif...'
                value={keyword}
                onChange={inputChangeHandler}
            />
            <button>Search</button>
            <select onChange={ratingChangeHandler} value={rating}>
                {RATING.map(rating => (
                    <option key={rating} value={rating}>
                        {rating}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default React.memo(SearchForm);
