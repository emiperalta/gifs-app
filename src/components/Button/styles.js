import { Link as LinkWouter } from 'wouter';
import styled from '@emotion/styled';

const common = `
    background-color: #4b4f64;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;
    padding: 0.3rem 0;
    width: 100%;
    transition: all 0.2s ease;

    &:hover {
        background-color: #56596d;
    }
    &:active {
        background-color: #3d4361;
    }

    [disabled] {
        opacity: 0.3;
        pointer-events: none;
    }
`;

export const Link = styled(LinkWouter)(`
    ${common}

    @media screen and (min-width: 220px) {
        width: 155px;
    }
`);

export const Button = styled.button(`
    ${common}
    font-size: 1.2rem;    

    @media screen and (min-width: 200px) {
        width: 100px;
    }
`);
