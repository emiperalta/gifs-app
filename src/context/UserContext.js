import { createContext, useEffect, useState } from 'react';
import { getFavsService } from 'services/userApi';

const Context = createContext({});

export const UserContextProvider = ({ children }) => {
    const [favs, setFavs] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(() =>
        window.sessionStorage.getItem('user')
    );
    const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));

    useEffect(() => {
        if (!jwt) setFavs([]);
        else
            getFavsService({ jwt })
                .then(userFavs => setFavs(userFavs))
                .catch(err => console.error(err));
    }, [jwt]);

    return (
        <Context.Provider
            value={{
                jwt,
                setJwt,
                favs,
                setFavs,
                userLoggedIn,
                setUserLoggedIn,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
