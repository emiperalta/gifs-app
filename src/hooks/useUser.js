import { useContext, useState, useCallback } from 'react';

import UserContext from 'context/UserContext';

import * as userApi from 'services/userApi';

const useUser = () => {
    const { jwt, setJwt, favs, setFavs, userLoggedIn, setUserLoggedIn } = useContext(
        UserContext
    );
    const [state, setState] = useState({ loading: false, error: false });

    // user login
    const login = useCallback(
        ({ username, password }) => {
            setState({ loading: true, error: false });

            userApi
                .userLogin({ username, password })
                .then(jwt => {
                    setJwt(jwt);
                    setState({ loading: false, error: false });
                    setUserLoggedIn(username);

                    window.sessionStorage.setItem('user', username); // to show the user logged in
                    window.sessionStorage.setItem('jwt', jwt);
                })
                .catch(err => {
                    setState({ loading: false, error: true });

                    window.sessionStorage.removeItem('user');
                    window.sessionStorage.removeItem('jwt');

                    console.error(err);
                });
        },
        [setJwt, setUserLoggedIn]
    );

    // user logout
    const logout = useCallback(() => {
        setJwt(null);
        setUserLoggedIn('');

        window.sessionStorage.removeItem('user');
        window.sessionStorage.removeItem('jwt');
    }, [setJwt, setUserLoggedIn]);

    // user register
    const register = useCallback(({ email, username, password }) => {
        setState({ loading: true, error: false });

        return userApi
            .userRegister({ email, username, password })
            .then(res => {
                res
                    ? setState({ loading: false, error: false })
                    : setState({ loading: false, error: true });
                return res;
            })
            .catch(err => {
                setState({ loading: false, error: true });
                console.error(err);
            });
    }, []);

    // forgot password
    const forgotPassword = useCallback(({ email }) => {
        setState({ loading: true, error: false });

        return userApi
            .forgot({ email })
            .then(res => {
                res
                    ? setState({ loading: false, error: false })
                    : setState({ loading: false, error: true });
                return res;
            })
            .catch(err => {
                setState({ loading: false, error: true });
                console.error(err);
            });
    }, []);

    // reset password
    const resetPassword = useCallback(({ token, password }) => {
        setState({ loading: true, error: false });

        return userApi
            .reset({ token, password })
            .then(res => {
                res
                    ? setState({ loading: false, error: false })
                    : setState({ loading: false, error: true });
                return res;
            })
            .catch(err => {
                setState({ loading: false, error: true });
                console.error(err);
            });
    }, []);

    // get all faved gifs
    const getFavs = useCallback(() => {
        userApi
            .getFavsService({ jwt })
            .then(userFavs => setFavs(userFavs))
            .catch(err => console.log(err));
    }, [jwt, setFavs]);

    // add a gif to favs
    const addFav = useCallback(
        ({ id }) => {
            userApi
                .addFavService({ id, jwt })
                .then(newFav => setFavs(newFav))
                .catch(err => console.error(err));
        },
        [jwt, setFavs]
    );

    // delete gif from favs
    const deleteFav = useCallback(
        ({ id }) => {
            userApi
                .deleteFavService({ id, jwt })
                .then(favDeleted => setFavs(favDeleted))
                .catch(err => console.log(err));
        },
        [jwt, setFavs]
    );

    return {
        isLogged: Boolean(jwt),
        isLoading: state.loading,
        hasError: state.error,
        login,
        logout,
        userLoggedIn,
        register,
        forgotPassword,
        resetPassword,
        getFavs,
        addFav,
        deleteFav,
        favs,
    };
};

export default useUser;
