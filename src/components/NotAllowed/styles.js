import styled from '@emotion/styled';
import { Link as LinkWouter } from 'wouter';

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

export const Link = styled(LinkWouter)`
    color: rgb(207, 205, 79);

    &:hover {
        color: rgb(177, 175, 73);
    }
    &:active {
        color: rgb(240, 236, 14);
    }
`;
