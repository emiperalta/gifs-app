import React, { useEffect, useState } from 'react';

import Button from 'components/Button';
import { getSingleGif } from 'services/giphyApi';

import { Container, ImgContainer, Img, Msg } from './styles';

const NoResults = () => {
    const [gif, setGif] = useState(null);
    const id = 'd8lUKXD00IXSw';

    useEffect(() => {
        getSingleGif({ id })
            .then(gif => setGif(gif))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <>
            {gif && (
                <Container>
                    <ImgContainer>
                        <Img alt='tumbleweed' src={gif.url} />
                    </ImgContainer>

                    <Msg>No FAV gifs found.</Msg>

                    <Button href='/'>Add some</Button>
                </Container>
            )}
        </>
    );
};

export default NoResults;
