import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`;

export const ImgContainer = styled.div`
    margin-bottom: 35px;
`;

export const Img = styled.img`
    width: 100%;

    @media screen and (min-width: 350px) {
        width: 285px;
    }
`;

export const Msg = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 20px;
`;
