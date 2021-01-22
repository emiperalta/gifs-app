/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { css, jsx } from '@emotion/react';

import SearchForm from 'components/SearchForm/SearchForm';

const pageErrorStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

const codeErrorStyles = css`
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;

    margin: 1rem 0;
`;

const msgErrorStyles = css`
    font-size: 1.5rem;
`;

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error 404 | Giffes</title>
            </Helmet>

            <SearchForm />

            <div css={pageErrorStyles}>
                <span css={codeErrorStyles}>404</span>
                <span css={msgErrorStyles}>
                    We can't find what you're looking for :(
                </span>
            </div>
        </>
    );
};

export default Error;
