import { Link as LinkWouter } from 'wouter';
import styled from '@emotion/styled';

export const Link = styled(LinkWouter)`
    background-color: #4b4f64;
    border: 1px solid transparent;
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    color: #fff;
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
