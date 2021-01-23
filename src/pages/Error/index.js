/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { jsx } from '@emotion/react';

import Button from 'components/Button';
import { codeErrorStyles, msgErrorStyles, pageErrorStyles } from './styles';

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error 404 | Giffes</title>
            </Helmet>

            <div css={pageErrorStyles}>
                <span css={codeErrorStyles}>404</span>
                <span css={msgErrorStyles}>
                    We can't find what you're looking for :(
                </span>
                <Button href='/'>Go back home</Button>
            </div>
        </>
    );
};

export default Error;
