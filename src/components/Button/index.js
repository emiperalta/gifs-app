import React from 'react';

import { Button, Link } from './styles';

const ButtonComponent = ({ children, href }) => {
    return href ? <Link href={href}>{children}</Link> : <Button>{children}</Button>;
};

export default ButtonComponent;
