import styled from '@emotion/styled';

export const GifContainer = styled.div`
    position: relative;

    & h5 {
        position: absolute;
        font-size: 10px;
        margin: 4px 0 0 4px;
        padding: 0 2px;
        top: 0;
        color: #e9e9e9;
        background: rgb(17, 17, 17, 0.3);
        cursor: pointer;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: top;
        cursor: initial;
    }

    & img:hover {
        outline: 1px solid #fff;
    }

    @media screen and (min-width: 600px) {
        &:nth-child(5n + 1) {
            grid-column: span 2;
            grid-row: span 1;
        }
        &:nth-child(3n + 1) {
            grid-column: span 1;
            grid-row: span 2;
        }
        &:nth-child(8n + 1) {
            grid-column: span 1;
            grid-row: span 2;
        }
    }

    ${props => {
        if (props.size === 'medium') {
            return `            
                margin-top: 60px;

                & img:hover {
                    outline: 1px solid transparent;
                }

                & h5 {
                    cursor: initial;
                }

                @media screen and (min-width: 700px) {
                    &,
                    & img {
                        width: 665px;
                        margin: 30px auto 0 auto;
                    }
                    & h5 {
                        margin-top: 34px
                    }  
                    & button {
                        margin-top: 30px
                    }         
                }
            `;
        }
    }}
`;
