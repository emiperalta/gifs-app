import { useReducer } from 'react';

const ACTIONS = {
    UPDATE_KEYWORD: 'UPDATE_KEYWORD',
    UPDATE_RATING: 'UPDATE_RATING',
    UPDATE_LANG: 'UPDATE_LANG',
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
            };
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload,
            };
        case ACTIONS.UPDATE_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state;
    }
};

const useForm = ({ initKeyword = '', initRating = 'g', initLang = 'en' } = {}) => {
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURI(initKeyword),
        rating: initRating,
        lang: initLang,
    });

    const { keyword, rating, lang } = state;

    return {
        keyword,
        rating,
        lang,
        updateKeyword: keyword =>
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating =>
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateLang: lang => dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang }),
    };
};

export default useForm;
