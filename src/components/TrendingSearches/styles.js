import styled from '@emotion/styled';
import { Link } from 'wouter';

export const Trending = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1.3rem;
    color: white;
    margin-top: 30px;
`;

export const TrendItem = styled(Link)`
    margin: 0 5px 5px 0;
    padding: 1px 5px;

    &:visited {
        color: #ce9292;
    }
    &:hover {
        color: #f0cfcf;
    }

    ${props => {
        const colorIndex = (props.index % 3) + 1;
        return `background-color: var(--bg-color${colorIndex})`;
    }}
`;
