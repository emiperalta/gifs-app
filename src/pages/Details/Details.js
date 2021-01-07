import React from 'react';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

import Gif from 'components/Gif/Gif';
import useSingleGif from 'hooks/useSingleGif';
import LoadingImages from 'components/ContentLoader/LoadingImages';

const Detail = ({ params }) => {
    const detail = true;

    const { id } = params;
    const { gif, isLoading, isError } = useSingleGif({ id });

    const title = gif ? gif.title : '';

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <LoadingImages className='centeredLoadingGifs' />
            </>
        );
    }
    if (isError) return <Redirect to='/404' />;
    if (!gif) return null;

    return (
        <>
            <Helmet>
                <title>{title} | Giffes</title>
            </Helmet>
            <Gif gif={gif} detail={detail} />
        </>
    );
};

export default Detail;
