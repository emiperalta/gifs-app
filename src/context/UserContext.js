import { createContext, useState } from 'react';

const Context = createContext({});

export const UserContextProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null);

    return <Context.Provider value={{ jwt, setJwt }}>{children}</Context.Provider>;
};

export default Context;
