import { css } from '@emotion/react';

export const pageErrorStyles = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
});

export const codeErrorStyles = css({
    fontSize: '5rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: '1rem 0',
});

export const msgErrorStyles = css({
    fontSize: '1.5rem',
    marginBottom: '5rem',
});
