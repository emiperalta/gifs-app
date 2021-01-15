import { useContext, useState, useCallback } from 'react';

import UserContext from 'context/UserContext';

import {
    userLogin,
    addFavService,
    getFavsService,
    deleteFavService,
} from 'services/userApi';

const useUser = () => {
    const { jwt, setJwt, favs, setFavs, user, setUser } = useContext(UserContext);
    const [state, setState] = useState({ loading: false, error: false });

    // user login
    const login = useCallback(
        ({ username, password }) => {
            setState({ loading: true, error: false });

            userLogin({ username, password })
                .then(jwt => {
                    setJwt(jwt);
                    setState({ loading: false, error: false });
                    setUser(username);

                    window.sessionStorage.setItem('user', username);
                    window.sessionStorage.setItem('jwt', jwt);
                })
                .catch(err => {
                    setState({ loading: false, error: true });

                    window.sessionStorage.removeItem('user');
                    window.sessionStorage.removeItem('jwt');

                    console.error(err);
                });
        },
        [setJwt, setUser]
    );

    // user logout
    const logout = useCallback(() => {
        setJwt(null);
        setUser('');

        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('jwt');
    }, [setJwt, setUser]);

    // get all faved gifs
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

    // delete gif from favs
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
        user,
        getFavs,
        addFav,
        deleteFav,
        favs,
    };
};

export default useUser;
