const { REACT_APP_USERAPI_BASEURL } = process.env;

export const userLogin = ({ username, password }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok');
            return res.json();
        })
        .then(res => {
            const { token } = res;
            return token;
        });
};

export const userRegister = ({ email, username, password }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
    }).then(res => {
        if (!res.ok) return false;
        return true;
    });
};

export const forgot = ({ email }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/forgot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    }).then(res => {
        if (!res.ok) return false;
        return true;
    });
};

export const reset = ({ token, password }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/reset/${token}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
    }).then(res => {
        if (!res.ok) return false;
        return true;
    });
};

export const getFavsService = ({ jwt }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/favs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok');
            return res.json();
        })
        .then(res => {
            const { userFavs } = res;
            return userFavs;
        });
};

export const addFavService = ({ id, jwt }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/favs/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok');
            return res.json();
        })
        .then(res => {
            const { newFav } = res;
            return newFav;
        });
};

export const deleteFavService = ({ id, jwt }) => {
    return fetch(`${REACT_APP_USERAPI_BASEURL}/favs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok');
            return res.json();
        })
        .then(res => {
            const { favDeleted } = res;
            return favDeleted;
        });
};
