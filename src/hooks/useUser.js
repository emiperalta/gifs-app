import { useContext, useState, useCallback } from 'react';

import UserContext from 'context/UserContext';

import {
    userLogin,
    addFavService,
    getFavsService,
    deleteFavService,
} from 'services/userApi';

const useUser = () => {
    const { jwt, setJwt, favs, setFavs } = useContext(UserContext);
    const [state, setState] = useState({ loading: false, error: false });

    // user login
    const login = useCallback(
        ({ username, password }) => {
            setState({ loading: true, error: false });
            userLogin({ username, password })
                .then(jwt => {
                    setState({ loading: false, error: false });
                    setJwt(jwt);
                    window.sessionStorage.setItem('jwt', jwt);
                })
                .catch(err => {
                    setState({ loading: false, error: true });
                    window.sessionStorage.removeItem('jwt');
                    console.error(err);
                });
        },
        [setJwt]
    );

    // user logout
    const logout = useCallback(() => {
        setJwt(null);
        window.sessionStorage.removeItem('jwt');
    }, [setJwt]);

    const getFavs = useCallback(() => {
        getFavsService({ jwt })
            .then(favs => setFavs(favs))
            .catch(err => console.log(err));
    }, [jwt, setFavs]);

    // add a gif to favs
    const addFav = useCallback(
        ({ id }) => {
            addFavService({ id, jwt })
                .then(newFav => setFavs(newFav))
                .catch(err => console.error(err));
        },
        [jwt, setFavs]
    );

    const deleteFav = useCallback(
        ({ id }) => {
            deleteFavService({ id, jwt })
                .then(favDeleted => setFavs(favDeleted))
                .catch(err => console.log(err));
        },
        [jwt, setFavs]
    );

    return {
        isLogged: Boolean(jwt),
        login,
        loginIsLoading: state.loading,
        loginHasError: state.error,
        logout,
        getFavs,
        addFav,
        deleteFav,
        favs,
    };
};

export default useUser;
