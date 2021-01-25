import styled from '@emotion/styled';

export const GifsList = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column), 1fr));
    grid-gap: 10px 10px;
    margin: 0 16px;
`;
