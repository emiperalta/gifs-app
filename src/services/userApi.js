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
