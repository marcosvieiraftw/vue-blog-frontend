import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll,
    getLoggedUserData
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth: { email, password }})
    };

    return fetch(`${config.apiUrl}/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.jwt) {
                localStorage.setItem('user_token', JSON.stringify(user.jwt));
                getLoggedUserData();
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_data');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/users`, requestOptions).then(handleResponse);
}

function getLoggedUserData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    fetch(`${config.apiUrl}/api/users/logged_user`, requestOptions)
        .then(handleResponse)
        .then(user_data => {
            localStorage.setItem('user_data', JSON.stringify(user_data));
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}