import React, { useState, useEffect } from 'react';

import { getSingleGif } from 'services/giphyApi';

import { Container, ImgContainer, Img, Msg, Link } from './styles';

const NotAllowed = () => {
    const [gif, setGif] = useState(null);
    const id = '26gsbJPV5xQruSkCI';

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

                    <Msg>
                        You have to <Link to='/login'>login</Link> to see your favs.
                    </Msg>
                </Container>
            )}
        </>
    );
};

export default NotAllowed;
