import React from 'react';

import { Link } from './styles';

const Button = ({ children, href }) => {
    return <Link href={href}>{children}</Link>;
};

export default Button;
