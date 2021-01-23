import React from 'react';
import { useLocation } from 'wouter';

import Button from 'components/Button';
import useForm from './hook';

import './SearchForm.css';

const RATING = ['g', 'pg', 'pg-13', 'r'];
const LANGUAGE = ['en', 'es', 'ja'];

const SearchForm = ({ initKeyword = '', initRating = 'g', initLang = 'en' }) => {
    const {
        keyword,
        rating,
        lang,
        updateKeyword,
        updateRating,
        updateLang,
    } = useForm({
        initKeyword,
        initRating,
        initLang,
    });

    const [, navigateTo] = useLocation();

    const inputChangeHandler = e => updateKeyword(e.target.value);

    const ratingChangeHandler = e => updateRating(e.target.value);

    const langChangeHandler = e => updateLang(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        keyword === ''
            ? navigateTo('/')
            : navigateTo(`/search/${keyword}/${rating}/${lang}`);
    };

    return (
        <form onSubmit={submitHandler} className='searchForm'>
            <input
                type='text'
                placeholder='Search any gif...'
                value={keyword}
                onChange={inputChangeHandler}
            />

            <Button>Search</Button>

            <div className='filters'>
                <select onChange={ratingChangeHandler} value={rating}>
                    <option disabled>Rating</option>
                    {RATING.map(rating => (
                        <option key={rating} value={rating}>
                            {rating}
                        </option>
                    ))}
                </select>

                <select onChange={langChangeHandler} value={lang}>
                    <option disabled>Language</option>
                    {LANGUAGE.map(lang => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default React.memo(SearchForm);
