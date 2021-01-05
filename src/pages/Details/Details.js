import React from 'react';
import { Redirect } from 'wouter';

import Gif from 'components/Gif/Gif';
import useSingleGif from 'hooks/useSingleGif';
import useTitle from 'hooks/useTitle';
import LoadingImages from 'components/ContentLoader/LoadingImages';

const Detail = ({ params }) => {
    const detail = true;

    const { id } = params;
    const { gif, isLoading, isError } = useSingleGif({ id });

    const title = gif ? gif.title : '';
    useTitle({ title });

    if (isLoading) return <LoadingImages className='centeredLoadingGifs' />;
    if (isError) return <Redirect to='/404' />;
    if (!gif) return null;

    return <Gif gif={gif} detail={detail} />;
};

export default Detail;
