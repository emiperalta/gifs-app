import React from 'react';
import { Helmet } from 'react-helmet';

import Button from 'components/Button';

import { CodeError, MsgError, PageError } from './styles';

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error 404 | Giffes</title>
            </Helmet>

            <PageError>
                <CodeError>404</CodeError>
                <MsgError>We can't find what you're looking for :(</MsgError>
                <Button href='/'>Go back home</Button>
            </PageError>
        </>
    );
};

export default Error;
