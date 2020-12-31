import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
    const [keyword, setKeyword] = useState('');

    const inputChangeHandler = e => setKeyword(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({ keyword });
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
        </form>
    );
};

export default SearchForm;
