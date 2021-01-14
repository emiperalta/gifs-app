import { useContext, useState, useCallback } from 'react';

import UserContext from 'context/UserContext';
import { userLogin } from 'services/userApi';

const useUser = () => {
    const { jwt, setJwt } = useContext(UserContext);
    const [state, setState] = useState({ loading: false, error: false });

    const login = useCallback(
        ({ username, password }) => {
            setState({ loading: true, error: false });
            userLogin({ username, password })
                .then(jwt => {
                    setState({ loading: false, error: false });
                    setJwt(jwt);
                })
                .catch(err => {
                    setState({ loading: false, error: true });
                    console.error(err);
                });
        },
        [setJwt]
    );

    const logout = useCallback(() => {
        setJwt(null);
    }, [setJwt]);

    return {
        isLogged: Boolean(jwt),
        login,
        loginIsLoading: state.loading,
        loginHasError: state.error,
        logout,
    };
};

export default useUser;
